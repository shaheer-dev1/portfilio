import { cn } from '@/utils/cn'
import styles from './BrowserFrame.module.css'

/**
 * Premium browser-window frame for project visuals.
 */
export default function BrowserFrame({
  children,
  className,
  url,
  large = false,
}) {
  return (
    <div className={cn(styles.frame, large && styles.large, className)}>
      <div className={styles.chrome} aria-hidden="true">
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.url}>
          <span>{url || 'preview'}</span>
        </div>
      </div>
      <div className={styles.viewport}>{children}</div>
    </div>
  )
}
