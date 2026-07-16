import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import Tag from '@/components/ui/Tag'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import { hasItems, hasText } from '@/components/project/utils'
import styles from './ProjectArchitecture.module.css'

function resolveArchitecture(architecture) {
  if (!architecture) return null

  if (typeof architecture === 'string') {
    return hasText(architecture)
      ? { summary: architecture, points: [] }
      : null
  }

  if (typeof architecture === 'object') {
    const summary = architecture.summary || architecture.description || null
    const points = Array.isArray(architecture.points)
      ? architecture.points.filter((point) => hasText(point))
      : []

    if (!hasText(summary) && !hasItems(points)) return null

    return {
      title: architecture.title || null,
      subtitle: architecture.subtitle || null,
      summary,
      points,
    }
  }

  return null
}

/**
 * System / database architecture. Hidden when empty.
 */
export default function ProjectArchitecture({ architecture }) {
  const content = resolveArchitecture(architecture)

  if (!content) return null

  return (
    <SectionWrapper
      title={content.title || 'Database Architecture'}
      subtitle={
        content.subtitle || 'How the relational system is structured.'
      }
      index="06"
      variant="secondary"
      titleGradient
    >
      {hasText(content.summary) && (
        <FadeIn className={styles.summaryWrap}>
          <p className={styles.summary}>{content.summary}</p>
        </FadeIn>
      )}

      {hasItems(content.points) && (
        <StaggerChildren className={styles.points}>
          {content.points.map((point) => (
            <motion.div key={point} variants={fadeUp}>
              <Tag>{point}</Tag>
            </motion.div>
          ))}
        </StaggerChildren>
      )}
    </SectionWrapper>
  )
}
