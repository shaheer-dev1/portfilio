import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import Container from '@/components/layout/Container'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import styles from './Stats.module.css'

/**
 * Compact trust indicators strip beneath the hero.
 */
export default function Stats() {
  return (
    <section className={styles.section} aria-label="Key statistics">
      <Container>
        <StaggerChildren className={styles.grid} as="ul">
          {profile.stats.map((stat) => (
            <motion.li key={stat.label} className={styles.item} variants={fadeUp}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </motion.li>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}
