import FadeIn from '@/components/motion/FadeIn'
import {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeIn,
  zoom,
} from '@/animations/variants'

const variantMap = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  fade: fadeIn,
  zoom,
}

/**
 * Scroll-triggered reveal with preset direction variants.
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  as,
  once = true,
  ...props
}) {
  return (
    <FadeIn
      variant={variantMap[direction] || fadeUp}
      delay={delay}
      className={className}
      as={as}
      once={once}
      {...props}
    >
      {children}
    </FadeIn>
  )
}
