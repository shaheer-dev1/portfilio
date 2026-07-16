import Badge from '@/components/ui/Badge'
import Tag from '@/components/ui/Tag'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/motion/FadeIn'
import ScrollReveal from '@/components/motion/ScrollReveal'
import ProjectMedia from './ProjectMedia'
import ProjectActions from './ProjectActions'
import styles from './FeaturedProject.module.css'

/**
 * Primary featured project — largest visual weight on the page.
 */
export default function FeaturedProject({ project }) {
  if (!project) return null

  return (
    <section className={styles.section} aria-label="Featured project">
      <Container>
        <ScrollReveal>
          <p className={styles.eyebrow}>Featured</p>
        </ScrollReveal>

        <div className={styles.layout}>
          <FadeIn className={styles.mediaWrap}>
            <ProjectMedia project={project} featured />
          </FadeIn>

          <FadeIn delay={0.1} className={styles.content}>
            <div className={styles.meta}>
              {project.category && (
                <Badge variant="accent">{project.category}</Badge>
              )}
              {project.status && <Badge>{project.status}</Badge>}
            </div>

            <h2 className={styles.title}>{project.title}</h2>

            {project.subtitle && (
              <p className={styles.subtitle}>{project.subtitle}</p>
            )}

            {project.shortDescription && (
              <p className={styles.description}>{project.shortDescription}</p>
            )}

            {Array.isArray(project.technologies) && project.technologies.length > 0 && (
              <div className={styles.tags}>
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            )}

            <ProjectActions project={project} size="lg" />
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
