import { cn } from '@/utils/cn'
import styles from './GlowCard.module.css'

/**
 * Card with ambient glow effect on hover.
 */
export default function GlowCard({
  children,
  className,
  innerClassName,
  interactive = true,
  padding = 'md',
  fullHeight = false,
  as: Component = 'div',
  ...props
}) {
  return (
    <div className={cn(styles.wrapper, fullHeight && styles.fullHeight, className)}>
      <div className={styles.glow} aria-hidden="true" />
      <Component
        className={cn(
          styles.card,
          interactive && styles.interactive,
          padding === 'sm' && styles.paddingSm,
          padding === 'lg' && styles.paddingLg,
          fullHeight && styles.fullHeight
        )}
        {...props}
      >
        <div className={cn(styles.inner, innerClassName)}>{children}</div>
      </Component>
    </div>
  )
}
