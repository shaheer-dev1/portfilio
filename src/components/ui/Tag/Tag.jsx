import { cn } from '@/utils/cn'
import styles from './Tag.module.css'

/**
 * Small pill tag for tech stack or metadata.
 */
export default function Tag({ children, variant = 'default', className, ...props }) {
  return (
    <span className={cn(styles.tag, styles[variant], className)} {...props}>
      {children}
    </span>
  )
}
