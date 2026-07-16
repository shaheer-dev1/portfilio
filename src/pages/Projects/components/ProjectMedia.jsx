import { cn } from '@/utils/cn'
import ProjectBrandMark from '@/components/project/ProjectBrandMark'
import styles from './ProjectMedia.module.css'

/**
 * Project listing media — branding logo preferred, thumbnail fallback, else placeholder.
 */
export default function ProjectMedia({
  project,
  featured = false,
  className,
}) {
  const label = project?.title || 'Project'
  const logo = project?.logo
  const thumbnail = project?.thumbnail
  const initials = label
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()

  const hasVisual = Boolean(logo || thumbnail)

  return (
    <div
      className={cn(styles.media, featured && styles.featured, className)}
      aria-hidden={hasVisual ? undefined : true}
    >
      {logo ? (
        <ProjectBrandMark
          src={logo}
          alt={`${label} logo`}
          variant="card"
          className={styles.logo}
        />
      ) : thumbnail ? (
        <img
          src={thumbnail}
          alt={`${label} preview`}
          className={styles.thumbnail}
          loading="lazy"
        />
      ) : (
        <div className={styles.placeholder}>
          <div className={styles.placeholderGlow} />
          <div className={styles.placeholderGrid} />
          <span className={styles.placeholderMark}>{initials || 'P'}</span>
          <span className={styles.placeholderLabel}>{project?.category || 'Project'}</span>
        </div>
      )}
    </div>
  )
}
