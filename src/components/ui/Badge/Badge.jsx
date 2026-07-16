import { cn } from '@/utils/cn'
import styles from './Badge.module.css'

/**
 * Status or category badge with optional status dot.
 */
export default function Badge({
  children,
  variant = 'default',
  showDot = false,
  className,
  ...props
}) {
  return (
    <span
      className={cn(styles.badge, styles[variant], className)}
      {...props}
    >
      {showDot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  )
}
