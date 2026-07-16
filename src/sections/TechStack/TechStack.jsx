import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { skillCategories } from '@/data/skills'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import Tag from '@/components/ui/Tag'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import styles from './TechStack.module.css'

/**
 * Grouped technology and practice overview.
 */
export default function TechStack() {
  const { skills } = profile.sections

  return (
    <SectionWrapper
      id="skills"
      title={skills.title}
      subtitle={skills.subtitle}
      index={skills.index}
      variant="secondary"
      headerCentered
      titleGradient
    >
      <StaggerChildren className={styles.grid}>
        {skillCategories.map((category) => (
          <motion.div key={category.id} variants={fadeUp} className={styles.item}>
            <GlassCard fullHeight padding="lg" className={styles.card}>
              <p className={styles.label}>{category.label}</p>
              <p className={styles.description}>{category.description}</p>
              <div className={styles.tags}>
                {category.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  )
}
