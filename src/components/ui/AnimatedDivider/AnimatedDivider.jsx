import { cn } from '@/utils/cn'
import styles from './AnimatedDivider.module.css'

/**
 * Horizontal or vertical divider with animated gradient accent.
 */
export default function AnimatedDivider({
  orientation = 'horizontal',
  centered = false,
  label,
  className,
  ...props
}) {
  if (label) {
    return (
      <div
        className={cn(styles.withLabel, className)}
        role="separator"
        aria-orientation={orientation}
        {...props}
      >
        <span className={styles.line} aria-hidden="true" />
        <span className={styles.label}>{label}</span>
        <span className={styles.line} aria-hidden="true" />
      </div>
    )
  }

  return (
    <hr
      className={cn(
        styles.divider,
        orientation === 'vertical' && styles.vertical,
        centered && styles.centered,
        className
      )}
      aria-orientation={orientation}
      {...props}
    />
  )
}
