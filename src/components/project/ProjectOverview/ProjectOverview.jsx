import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import { hasText } from '@/components/project/utils'
import styles from './ProjectOverview.module.css'

/**
 * Overview intro plus Problem / Solution / Outcome cards.
 * Renders only content that exists in case-study data.
 */
export default function ProjectOverview({ overview, problem, solution, outcome }) {
  const cards = [
    { id: 'problem', label: 'Problem', body: problem },
    { id: 'solution', label: 'Solution', body: solution },
    { id: 'outcome', label: 'Outcome', body: outcome },
  ].filter((card) => hasText(card.body))

  const hasOverview = hasText(overview)

  if (!hasOverview && cards.length === 0) return null

  return (
    <SectionWrapper
      title="Overview"
      subtitle="How the product challenge was framed and resolved."
      index="01"
      titleGradient
    >
      {hasOverview && (
        <FadeIn className={styles.overviewWrap}>
          <p className={styles.overview}>{overview}</p>
        </FadeIn>
      )}

      {cards.length > 0 && (
        <StaggerChildren className={styles.grid}>
          {cards.map((card) => (
            <motion.div key={card.id} variants={fadeUp} className={styles.item}>
              <GlassCard interactive fullHeight padding="lg" className={styles.card}>
                <p className={styles.label}>{card.label}</p>
                <p className={styles.body}>{card.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerChildren>
      )}
    </SectionWrapper>
  )
}
