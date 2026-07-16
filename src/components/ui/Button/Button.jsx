import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { buttonTap, buttonHover } from '@/animations/variants'
import styles from './Button.module.css'

/**
 * Premium button with primary, secondary, gradient, outline, and ghost variants.
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    fullWidth = false,
    className,
    disabled,
    type = 'button',
    as: Component,
    href,
    ...props
  },
  ref
) {
  const reducedMotion = useReducedMotion()

  const classes = cn(
    styles.button,
    styles[variant],
    size === 'sm' && styles.sm,
    size === 'lg' && styles.lg,
    !children && icon && styles.iconOnly,
    fullWidth && styles.fullWidth,
    className
  )

  const motionProps = reducedMotion
    ? {}
    : {
        whileHover: disabled ? undefined : buttonHover,
        whileTap: disabled ? undefined : buttonTap,
      }

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.ripple} aria-hidden="true" />
    </>
  )

  if (Component === 'a' || href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  )
})

export default Button
