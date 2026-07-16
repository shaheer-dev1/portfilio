import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import Tag from '@/components/ui/Tag'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import { hasItems, hasText } from '@/components/project/utils'
import styles from './ProjectTechStack.module.css'

function resolveGroups({ technologies, techGroups }) {
  if (Array.isArray(techGroups) && techGroups.length > 0) {
    return techGroups
      .map((group, index) => {
        const items = Array.isArray(group?.items)
          ? group.items.filter((item) => hasText(item))
          : Array.isArray(group?.technologies)
            ? group.technologies.filter((item) => hasText(item))
            : []

        if (!items.length) return null

        return {
          id: group.id || `group-${index}`,
          label: group.label || group.title || 'Technologies',
          items,
        }
      })
      .filter(Boolean)
  }

  const flat = Array.isArray(technologies)
    ? technologies.filter((item) => hasText(item))
    : []

  if (!flat.length) return []

  return [
    {
      id: 'technologies',
      label: 'Technologies',
      items: flat,
    },
  ]
}

/**
 * Grouped technology stack in glass cards.
 */
export default function ProjectTechStack({
  technologies,
  techGroups,
  techHighlights,
}) {
  const groups = resolveGroups({ technologies, techGroups })

  // Optional detail cards from case study highlights (no invented content)
  const highlightCards = Array.isArray(techHighlights)
    ? techHighlights
        .map((item, index) => {
          if (typeof item === 'string' && hasText(item)) {
            return { id: `highlight-${index}`, title: item, description: null }
          }
          if (item && typeof item === 'object') {
            const title = item.label || item.title
            if (!hasText(title)) return null
            return {
              id: item.id || `highlight-${index}`,
              title,
              description: item.detail || item.description || null,
            }
          }
          return null
        })
        .filter(Boolean)
    : []

  if (!hasItems(groups) && !hasItems(highlightCards)) return null

  return (
    <SectionWrapper
      title="Technology Stack"
      subtitle="The systems behind the product."
      index="05"
      titleGradient
    >
      {hasItems(groups) && (
        <StaggerChildren className={styles.grid}>
          {groups.map((group) => (
            <motion.div key={group.id} variants={fadeUp} className={styles.item}>
              <GlassCard interactive fullHeight padding="lg">
                <p className={styles.groupLabel}>{group.label}</p>
                <div className={styles.tags}>
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerChildren>
      )}

      {hasItems(highlightCards) && (
        <StaggerChildren className={styles.highlights}>
          {highlightCards.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <GlassCard padding="lg">
                <h3 className={styles.highlightTitle}>{item.title}</h3>
                {item.description && (
                  <p className={styles.highlightBody}>{item.description}</p>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </StaggerChildren>
      )}
    </SectionWrapper>
  )
}
