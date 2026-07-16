import {
  Sparkles,
  Layers,
  Code2,
  Zap,
  Shield,
  Boxes,
  Layout,
  Cpu,
} from 'lucide-react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlowCard from '@/components/ui/GlowCard'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import { hasItems, normalizeListItems } from '@/components/project/utils'
import styles from './ProjectFeatures.module.css'

const iconMap = {
  sparkles: Sparkles,
  layers: Layers,
  code: Code2,
  zap: Zap,
  shield: Shield,
  boxes: Boxes,
  layout: Layout,
  cpu: Cpu,
}

/**
 * Core features grid with icon, glow, and hover elevation.
 */
export default function ProjectFeatures({ features }) {
  const items = normalizeListItems(features, (item, index) => ({
    id: item.id || `feature-${index}`,
    title: item.title || item.label || '',
    description: item.description || null,
    icon: item.icon || null,
  })).filter((item) => item.title)

  if (!hasItems(items)) return null

  return (
    <SectionWrapper
      title="Core Features"
      subtitle="Capabilities that define the product experience."
      index="03"
      titleGradient
    >
      <StaggerChildren className={styles.grid}>
        {items.map((feature) => {
          const Icon = iconMap[feature.icon] || Sparkles

          return (
            <motion.div key={feature.id} variants={fadeUp} className={styles.item}>
              <GlowCard fullHeight padding="lg" className={styles.card}>
                <div className={styles.icon} aria-hidden="true">
                  <Icon size={18} />
                </div>
                <h3 className={styles.title}>{feature.title}</h3>
                {feature.description && (
                  <p className={styles.description}>{feature.description}</p>
                )}
              </GlowCard>
            </motion.div>
          )
        })}
      </StaggerChildren>
    </SectionWrapper>
  )
}
