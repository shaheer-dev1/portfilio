import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const CONTACT_TO = process.env.CONTACT_TO_EMAIL || 'shaheer.qureshi.dev@gmail.com'
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || 'Shaheer Qureshi <onboarding@resend.dev>'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const RATE_LIMIT_MAX = 3

/** Best-effort in-memory rate limit (per warm serverless instance). */
const rateLimitMap = new Map()

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown'
}

function isRateLimited(ip) {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now - entry.start > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { start: now, count: 1 })
    return false
  }

  entry.count += 1
  rateLimitMap.set(ip, entry)
  return entry.count > RATE_LIMIT_MAX
}

function sanitize(value, maxLength = 5000) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function buildInquiryHtml({ name, email, subject, message, submittedAt, ip }) {
  return `
    <div style="font-family: Inter, Arial, sans-serif; color: #111; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New Portfolio Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      <p><strong>Sender IP:</strong> ${escapeHtml(ip)}</p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `
}

function buildAutoReplyHtml(name) {
  return `
    <div style="font-family: Inter, Arial, sans-serif; color: #111; line-height: 1.7;">
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thank you for contacting me through my portfolio.</p>
      <p>I've successfully received your message.</p>
      <p>I'll review your inquiry and respond as soon as possible, usually within 24 hours.</p>
      <p>Meanwhile, feel free to explore my projects and portfolio.</p>
      <p style="margin-top: 24px;">
        Best regards,<br />
        <strong>Shaheer Qureshi</strong><br />
        Full Stack Developer<br />
        Islamabad, Pakistan
      </p>
    </div>
  `
}

function buildAutoReplyText(name) {
  return [
    `Hi ${name},`,
    '',
    'Thank you for contacting me through my portfolio.',
    '',
    "I've successfully received your message.",
    '',
    "I'll review your inquiry and respond as soon as possible, usually within 24 hours.",
    '',
    'Meanwhile, feel free to explore my projects and portfolio.',
    '',
    'Best regards,',
    'Shaheer Qureshi',
    'Full Stack Developer',
    'Islamabad, Pakistan',
  ].join('\n')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured.')
    return res.status(500).json({
      error: 'Email service is not configured. Please try again later.',
    })
  }

  const ip = getClientIp(req)

  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: 'Too many requests. Please wait a few minutes and try again.',
    })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return res.status(400).json({ error: 'Invalid request body.' })
    }
  }

  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid request body.' })
  }

  // Honeypot — bots fill this; humans leave it empty.
  if (sanitize(body.website || body.company, 200)) {
    return res.status(200).json({ ok: true })
  }

  const name = sanitize(body.name, 120)
  const email = sanitize(body.email, 200)
  const subject = sanitize(body.subject, 200)
  const message = sanitize(body.message, 5000)

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: 'Please complete all fields before sending.',
    })
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({
      error: 'Enter a valid email address.',
    })
  }

  const submittedAt = new Date().toISOString()

  try {
    const inquiry = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_TO],
      replyTo: email,
      subject: `🚀 New Portfolio Inquiry — ${name}`,
      html: buildInquiryHtml({
        name,
        email,
        subject,
        message,
        submittedAt,
        ip,
      }),
      text: [
        'New Portfolio Inquiry',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        `Submitted: ${submittedAt}`,
        `Sender IP: ${ip}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    if (inquiry.error) {
      console.error('Resend inquiry error:', inquiry.error)
      return res.status(502).json({
        error: 'Unable to send your message right now. Please try again shortly.',
      })
    }

    const autoReply = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      replyTo: CONTACT_TO,
      subject: "Thanks for reaching out! I've received your message.",
      html: buildAutoReplyHtml(name),
      text: buildAutoReplyText(name),
    })

    if (autoReply.error) {
      // Inquiry already delivered — treat as success with a soft note.
      console.error('Resend auto-reply error:', autoReply.error)
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact API failure:', error)
    return res.status(500).json({
      error: 'Unexpected server error. Please try again or email me directly.',
    })
  }
}
