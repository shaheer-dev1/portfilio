import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { experience } from '@/data/experience'
import SectionWrapper from '@/components/layout/SectionWrapper'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import { cn } from '@/utils/cn'
import styles from './Experience.module.css'

/**
 * Education and journey timeline.
 */
export default function Experience() {
  const { experience: section } = profile.sections

  return (
    <SectionWrapper
      id="experience"
      title={section.title}
      subtitle={section.subtitle}
      index={section.index}
      titleGradient
    >
      <StaggerChildren className={styles.timeline} as="ol">
        {experience.map((item, index) => (
          <motion.li
            key={item.id}
            className={styles.item}
            variants={fadeUp}
          >
            <div className={styles.marker} aria-hidden="true">
              <span
                className={cn(styles.dot, item.current && styles.dotCurrent)}
              />
              {index < experience.length - 1 && <span className={styles.line} />}
            </div>

            <div className={styles.content}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.company}>
                    {item.company}
                    {item.location ? (
                      <>
                        <span className={styles.separator} aria-hidden="true">
                          ·
                        </span>
                        {item.location}
                      </>
                    ) : null}
                  </p>
                </div>
                <p className={styles.period}>{item.period}</p>
              </div>

              <p className={styles.summary}>{item.summary}</p>

              <ul className={styles.highlights} role="list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  )
}
