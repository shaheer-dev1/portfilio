import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import styles from './GlowOrb.module.css'

/**
 * Large blurred gradient orb for ambient background lighting.
 */
export default function GlowOrb({
  color = 'blue',
  position = 'topLeft',
  animated = true,
  className,
}) {
  const reducedMotion = useReducedMotion()

  const animationClass = reducedMotion
    ? null
    : position === 'bottomCenter'
      ? styles.animatedSlow
      : position === 'topRight'
        ? styles.animatedDelay
        : styles.animated

  return (
    <div
      className={cn(
        styles.orb,
        styles[color],
        styles[position],
        animated && animationClass,
        className
      )}
      aria-hidden="true"
    />
  )
}
