import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import styles from './NavLink.module.css'

/**
 * Navigation link with animated underline and active state.
 */
export default function NavLink({
  href,
  label,
  isActive = false,
  onClick,
  variant = 'desktop',
  className,
}) {
  const reducedMotion = useReducedMotion()

  return (
    <a
      href={href}
      className={cn(
        styles.link,
        variant === 'mobile' && styles.mobile,
        isActive && styles.active,
        className
      )}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
      {isActive && (
        <motion.span
          className={styles.underline}
          layoutId={variant === 'desktop' ? 'nav-underline' : undefined}
          initial={reducedMotion ? false : { opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 0.9, scaleX: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        />
      )}
    </a>
  )
}
