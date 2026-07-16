import { Code2, Layers, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { services } from '@/data/services'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import styles from './Services.module.css'

const iconMap = {
  layers: Layers,
  code: Code2,
  sparkles: Sparkles,
}

/**
 * Service offerings presented as clear value propositions.
 */
export default function Services() {
  const { services: section } = profile.sections

  return (
    <SectionWrapper
      id="services"
      title={section.title}
      subtitle={section.subtitle}
      index={section.index}
      variant="secondary"
      headerCentered
      titleGradient
    >
      <StaggerChildren className={styles.grid}>
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Layers

          return (
            <motion.div key={service.id} variants={fadeUp} className={styles.item}>
              <GlassCard interactive fullHeight padding="lg" className={styles.card}>
                <div className={styles.icon} aria-hidden="true">
                  <Icon size={20} />
                </div>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <ul className={styles.outcomes} role="list">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          )
        })}
      </StaggerChildren>
    </SectionWrapper>
  )
}
