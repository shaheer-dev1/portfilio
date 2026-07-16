import { cn } from '@/utils/cn'
import styles from './SectionTitle.module.css'

/**
 * Large display heading for page sections.
 */
export default function SectionTitle({
  children,
  index,
  gradient = false,
  centered = false,
  as: Component = 'h2',
  className,
  ...props
}) {
  return (
    <div className={cn(index && styles.withIndex, centered && styles.centered)}>
      {index && (
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
      )}
      <Component
        className={cn(styles.title, gradient && styles.gradient, className)}
        {...props}
      >
        {children}
      </Component>
    </div>
  )
}
