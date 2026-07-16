import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { featuredProjects } from '@/data/projects'
import { profile } from '@/data/profile'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlowCard from '@/components/ui/GlowCard'
import Badge from '@/components/ui/Badge'
import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import styles from './FeaturedProjects.module.css'

function getProjectHref(project) {
  if (project.slug) return `/projects/${project.slug}`
  if (project.liveDemo) return project.liveDemo
  return '#work'
}

/**
 * Featured project showcase for the homepage.
 * Driven entirely by featuredProjects from projects.js.
 */
export default function FeaturedProjects() {
  const { work } = profile.sections

  return (
    <SectionWrapper
      id="work"
      title={work.title}
      subtitle={work.subtitle}
      index={work.index}
      titleGradient
    >
      <StaggerChildren className={styles.grid}>
        {featuredProjects.map((project) => (
          <motion.article key={project.id} variants={fadeUp} className={styles.item}>
            <GlowCard fullHeight padding="lg" className={styles.card}>
              <a
                href={getProjectHref(project)}
                className={styles.cardLink}
              >
                <span className={styles.header}>
                  <Badge variant="accent">{project.category}</Badge>
                  <ArrowUpRight
                    size={18}
                    className={styles.arrow}
                    aria-hidden="true"
                  />
                </span>

                <h3 className={styles.title}>{project.title}</h3>
                {project.subtitle && (
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                )}
                <p className={styles.description}>{project.shortDescription}</p>

                <span className={styles.tags}>
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </span>
              </a>
            </GlowCard>
          </motion.article>
        ))}
      </StaggerChildren>

      <div className={styles.cta}>
        <Button variant="outline" href={work.ctaHref}>
          {work.ctaLabel}
        </Button>
      </div>
    </SectionWrapper>
  )
}
