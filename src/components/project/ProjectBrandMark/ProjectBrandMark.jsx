import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'
import { createTrimmedLogoSrc } from '@/components/project/logoBounds'
import styles from './ProjectBrandMark.module.css'

/**
 * Reusable project logo mark with automatic transparent-padding trim.
 * Variants: hero | card (listing) | featured | inline.
 * Renders nothing when src is missing.
 */
export default function ProjectBrandMark({
  src,
  alt = '',
  variant = 'inline',
  className,
}) {
  const [displaySrc, setDisplaySrc] = useState(src)

  useEffect(() => {
    if (!src) {
      setDisplaySrc(null)
      return undefined
    }

    let cancelled = false
    setDisplaySrc(src)

    createTrimmedLogoSrc(src)
      .then((trimmed) => {
        if (!cancelled && trimmed) setDisplaySrc(trimmed)
      })
      .catch(() => {
        if (!cancelled) setDisplaySrc(src)
      })

    return () => {
      cancelled = true
    }
  }, [src])

  if (!src || !displaySrc) return null

  return (
    <img
      src={displaySrc}
      alt={alt}
      className={cn(styles.mark, styles[variant], className)}
      decoding="async"
    />
  )
}
