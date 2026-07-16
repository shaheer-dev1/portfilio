import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { viewportConfig } from '@/animations/variants'

/**
 * Generic fade-in entrance wrapper.
 */
export default function FadeIn({
  children,
  variant,
  delay = 0,
  duration,
  className,
  as = 'div',
  once = true,
  ...props
}) {
  const reducedMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  const defaultVariant = variant || {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : duration || 0.6,
        delay: reducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportConfig, once }}
      variants={defaultVariant}
      {...props}
    >
      {children}
    </Component>
  )
}
