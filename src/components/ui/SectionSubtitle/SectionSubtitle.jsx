import { cn } from '@/utils/cn'
import styles from './SectionSubtitle.module.css'

/**
 * Supporting text beneath section titles.
 */
export default function SectionSubtitle({
  children,
  centered = false,
  size = 'md',
  as: Component = 'p',
  className,
  ...props
}) {
  return (
    <Component
      className={cn(
        styles.subtitle,
        centered && styles.centered,
        size === 'sm' && styles.sm,
        size === 'lg' && styles.lg,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
