import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { staggerContainer, viewportConfig } from '@/animations/variants'

/**
 * Staggers entrance animations for child elements.
 */
export default function StaggerChildren({
  children,
  variant = staggerContainer,
  className,
  once = true,
  as = 'div',
  ...props
}) {
  const reducedMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  const activeVariant = reducedMotion
    ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } }
    : variant

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportConfig, once }}
      variants={activeVariant}
      {...props}
    >
      {children}
    </Component>
  )
}
