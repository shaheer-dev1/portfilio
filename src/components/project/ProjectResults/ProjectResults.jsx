import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import { hasItems, hasText, normalizeListItems } from '@/components/project/utils'
import styles from './ProjectResults.module.css'

/**
 * Results / achievements. Fully hidden when empty.
 */
export default function ProjectResults({ results }) {
  const items = normalizeListItems(results, (item, index) => ({
    id: item.id || `result-${index}`,
    title: item.label || item.title || '',
    description: item.value || item.description || null,
  })).filter((item) => hasText(item.title) || hasText(item.description))

  if (!hasItems(items)) return null

  return (
    <SectionWrapper
      title="Results"
      subtitle="Measured impact from the engagement."
      index="09"
      variant="secondary"
      titleGradient
    >
      <StaggerChildren className={styles.grid}>
        {items.map((item) => (
          <motion.div key={item.id} variants={fadeUp} className={styles.item}>
            <GlassCard interactive fullHeight padding="lg">
              {hasText(item.description) && (
                <p className={styles.value}>{item.description}</p>
              )}
              {hasText(item.title) && (
                <p className={styles.label}>{item.title}</p>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  )
}
