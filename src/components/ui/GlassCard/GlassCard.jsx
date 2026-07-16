import { cn } from '@/utils/cn'
import styles from './GlassCard.module.css'

/**
 * Glass-effect card with backdrop blur and subtle gradient overlay.
 */
export default function GlassCard({
  children,
  className,
  innerClassName,
  interactive = false,
  padding = 'md',
  fullHeight = false,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={cn(
        styles.card,
        interactive && styles.interactive,
        padding === 'sm' && styles.paddingSm,
        padding === 'lg' && styles.paddingLg,
        fullHeight && styles.fullHeight,
        className
      )}
      {...props}
    >
      <div className={cn(styles.inner, innerClassName)}>{children}</div>
    </Component>
  )
}
