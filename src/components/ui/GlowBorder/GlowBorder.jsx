import { cn } from '@/utils/cn'
import styles from './GlowBorder.module.css'

/**
 * Animated gradient border wrapper using mask technique.
 */
export default function GlowBorder({
  children,
  animated = true,
  subtle = false,
  glow = false,
  radius = 'card',
  className,
  innerClassName,
  ...props
}) {
  const radiusClass = {
    button: styles.radiusButton,
    card: styles.radiusCard,
    container: styles.radiusContainer,
  }[radius]

  return (
    <div
      className={cn(
        styles.wrapper,
        animated && styles.animated,
        subtle && styles.subtle,
        glow && styles.glow,
        radiusClass,
        className
      )}
      {...props}
    >
      <div className={cn(styles.inner, innerClassName)}>{children}</div>
    </div>
  )
}
