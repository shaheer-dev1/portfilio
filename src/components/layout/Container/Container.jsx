import { cn } from '@/utils/cn'
import styles from './Container.module.css'

/**
 * Centered content container with max-width constraint.
 */
export default function Container({
  children,
  size = 'default',
  className,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={cn(
        styles.container,
        size === 'narrow' && styles.narrow,
        size === 'fluid' && styles.fluid,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
