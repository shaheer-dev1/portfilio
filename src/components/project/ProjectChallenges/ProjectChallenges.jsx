import SectionWrapper from '@/components/layout/SectionWrapper'
import FadeIn from '@/components/motion/FadeIn'
import { hasItems, hasText, normalizeListItems } from '@/components/project/utils'
import styles from './ProjectChallenges.module.css'

/**
 * Editorial challenges section with narrow readable measure.
 */
export default function ProjectChallenges({ challenges }) {
  const items = normalizeListItems(challenges, (item, index) => ({
    id: item.id || `challenge-${index}`,
    title: item.title || item.label || null,
    description: item.description || (typeof item === 'string' ? item : null),
  })).filter((item) => hasText(item.title) || hasText(item.description))

  if (!hasItems(items)) return null

  return (
    <SectionWrapper
      title="Challenges"
      index="07"
      variant="secondary"
      titleGradient
    >
      <div className={styles.editorial}>
        {items.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.05} className={styles.block}>
            {hasText(item.title) && (
              <h3 className={styles.title}>{item.title}</h3>
            )}
            {hasText(item.description) && (
              <p className={styles.body}>{item.description}</p>
            )}
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
