import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { profile } from '@/data/profile'
import { activeSocialLinks } from '@/data/socials'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/motion/FadeIn'
import ScrollReveal from '@/components/motion/ScrollReveal'
import styles from './Contact.module.css'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Contact section with validated inquiry form and Resend-backed delivery.
 */
export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
    if (status === 'success') setStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const name = form.name.trim()
    const email = form.email.trim()
    const subject = form.subject.trim()
    const message = form.message.trim()

    if (!name || !email || !subject || !message) {
      setError('Please complete all fields before sending.')
      setStatus('error')
      return
    }

    if (!EMAIL_REGEX.test(email)) {
      setError('Enter a valid email address.')
      setStatus('error')
      return
    }

    setError('')
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          website: form.website,
        }),
      })

      let payload = null
      try {
        payload = await response.json()
      } catch {
        payload = null
      }

      if (!response.ok) {
        setError(
          payload?.error ||
            'Unable to send your message right now. Please try again shortly.',
        )
        setStatus('error')
        return
      }

      setStatus('success')
      setForm(initialForm)
    } catch {
      setError(
        'Network error. Please check your connection and try again, or email me directly.',
      )
      setStatus('error')
    }
  }

  const isLoading = status === 'loading'

  return (
    <SectionWrapper
      id="contact"
      title={profile.sections.contact.title}
      subtitle={profile.contact.description}
      index={profile.sections.contact.index}
      variant="secondary"
      titleGradient
    >
      <div className={styles.grid}>
        <ScrollReveal className={styles.info}>
          <h3 className={styles.heading}>{profile.contact.heading}</h3>
          <p className={styles.intro}>{profile.contact.formIntro}</p>

          <div className={styles.channels}>
            <a className={styles.channel} href={`mailto:${profile.email}`}>
              <span className={styles.channelIcon} aria-hidden="true">
                <Mail size={18} />
              </span>
              <span>
                <span className={styles.channelLabel}>Email</span>
                <span className={styles.channelValue}>{profile.email}</span>
              </span>
            </a>

            <div className={styles.channel}>
              <span className={styles.channelIcon} aria-hidden="true">
                <MapPin size={18} />
              </span>
              <span>
                <span className={styles.channelLabel}>Location</span>
                <span className={styles.channelValue}>{profile.location}</span>
              </span>
            </div>
          </div>

          {Array.isArray(profile.contact.availableFor) &&
            profile.contact.availableFor.length > 0 && (
              <div className={styles.available}>
                <p className={styles.availableTitle}>Available For</p>
                <ul className={styles.availableList} role="list">
                  {profile.contact.availableFor.map((item) => (
                    <li key={item} className={styles.availableItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          <div className={styles.socials}>
            {activeSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={styles.social}
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {link.label}
              </a>
            ))}
          </div>
        </ScrollReveal>

        <FadeIn delay={0.12} className={styles.formWrap}>
          <GlassCard padding="lg" className={styles.formCard}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={styles.input}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-subject" className={styles.label}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  autoComplete="off"
                  className={styles.input}
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry or collaboration"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  className={styles.textarea}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or collaboration."
                  required
                  disabled={isLoading}
                />
              </div>

              {status === 'error' && error && (
                <p className={styles.feedbackError} role="alert">
                  {error}
                </p>
              )}

              {status === 'success' && (
                <div className={styles.feedbackSuccess} role="status">
                  <p className={styles.successTitle}>✅ Thank you!</p>
                  <p>Your message has been sent successfully.</p>
                  <p>A confirmation email has also been sent to your inbox.</p>
                  <p>I&apos;ll get back to you within 24 hours.</p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isLoading}
                icon={<Send size={16} />}
                iconPosition="right"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </GlassCard>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
