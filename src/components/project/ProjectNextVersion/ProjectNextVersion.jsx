import SectionWrapper from '@/components/layout/SectionWrapper'
import FadeIn from '@/components/motion/FadeIn'
import { hasItems, hasText } from '@/components/project/utils'
import styles from './ProjectNextVersion.module.css'

function resolveBody(nextVersion, nextSteps) {
  if (Array.isArray(nextVersion)) {
    const items = nextVersion.filter((item) => hasText(item))
    if (items.length > 0) return { type: 'list', items }
  }

  if (hasText(nextVersion)) return { type: 'text', body: nextVersion }
  if (hasText(nextSteps)) return { type: 'text', body: nextSteps }

  return null
}

/**
 * Future improvements / next version. Hidden when empty.
 */
export default function ProjectNextVersion({ nextSteps, nextVersion }) {
  const content = resolveBody(nextVersion, nextSteps)

  if (!content) return null

  return (
    <SectionWrapper title="Next Version" index="10" titleGradient>
      <FadeIn className={styles.content}>
        {content.type === 'list' ? (
          <ul className={styles.list}>
            {content.items.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.body}>{content.body}</p>
        )}
      </FadeIn>
    </SectionWrapper>
  )
}
