import { useRef, useCallback } from 'react'
import { cn } from '@/utils/cn'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import styles from './Spotlight.module.css'

/**
 * Mouse-following radial gradient spotlight for hero sections.
 * Disabled on mobile and when reduced motion is preferred.
 */
export default function Spotlight({ children, className, intensity = 1, ...props }) {
  const containerRef = useRef(null)
  const isMobile = useIsMobile()
  const reducedMotion = useReducedMotion()
  const disabled = isMobile || reducedMotion

  const handleMouseMove = useCallback(
    (event) => {
      if (disabled || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      containerRef.current.style.setProperty('--spotlight-x', `${x}px`)
      containerRef.current.style.setProperty('--spotlight-y', `${y}px`)
    },
    [disabled]
  )

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return
    containerRef.current.style.setProperty('--spotlight-x', '50%')
    containerRef.current.style.setProperty('--spotlight-y', '40%')
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(styles.spotlight, disabled && styles.disabled, className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--spotlight-intensity': intensity }}
      {...props}
    >
      {!disabled && <div className={styles.glow} aria-hidden="true" />}
      {children}
    </div>
  )
}
