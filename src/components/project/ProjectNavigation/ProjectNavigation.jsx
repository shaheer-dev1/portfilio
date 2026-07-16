import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionWrapper from '@/components/layout/SectionWrapper'
import FadeIn from '@/components/motion/FadeIn'
import { hasText } from '@/components/project/utils'
import styles from './ProjectNavigation.module.css'

/**
 * Previous / next project navigation driven by projects list order.
 */
export default function ProjectNavigation({ previous, next }) {
  if (!previous && !next) return null

  return (
    <SectionWrapper ariaLabel="Project navigation">
      <FadeIn className={styles.nav}>
        {previous ? (
          <Link
            to={`/projects/${previous.slug}`}
            className={styles.link}
            aria-label={`Previous project: ${previous.title}`}
          >
            <span className={styles.direction}>
              <ArrowLeft size={16} aria-hidden="true" />
              Previous
            </span>
            <span className={styles.title}>{previous.title}</span>
            {hasText(previous.subtitle) && (
              <span className={styles.subtitle}>{previous.subtitle}</span>
            )}
          </Link>
        ) : (
          <span className={styles.placeholder} aria-hidden="true" />
        )}

        {next ? (
          <Link
            to={`/projects/${next.slug}`}
            className={`${styles.link} ${styles.next}`}
            aria-label={`Next project: ${next.title}`}
          >
            <span className={styles.direction}>
              Next
              <ArrowRight size={16} aria-hidden="true" />
            </span>
            <span className={styles.title}>{next.title}</span>
            {hasText(next.subtitle) && (
              <span className={styles.subtitle}>{next.subtitle}</span>
            )}
          </Link>
        ) : (
          <span className={styles.placeholder} aria-hidden="true" />
        )}
      </FadeIn>
    </SectionWrapper>
  )
}
