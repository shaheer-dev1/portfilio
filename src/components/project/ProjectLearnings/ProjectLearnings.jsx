import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import { hasItems, hasText, normalizeListItems } from '@/components/project/utils'
import styles from './ProjectLearnings.module.css'

/**
 * Minimal learnings cards.
 */
export default function ProjectLearnings({ learnings }) {
  const items = normalizeListItems(learnings, (item, index) => ({
    id: item.id || `learning-${index}`,
    title: item.title || null,
    description: item.description || item.title || '',
  })).filter((item) => hasText(item.description))

  if (!hasItems(items)) return null

  return (
    <SectionWrapper title="Learnings" index="08" titleGradient>
      <StaggerChildren className={styles.grid}>
        {items.map((item) => (
          <motion.div key={item.id} variants={fadeUp} className={styles.item}>
            <GlassCard interactive fullHeight padding="lg">
              {hasText(item.title) && item.title !== item.description && (
                <h3 className={styles.title}>{item.title}</h3>
              )}
              <p className={styles.body}>{item.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  )
}
