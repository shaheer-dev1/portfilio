import Badge from '@/components/ui/Badge'
import Tag from '@/components/ui/Tag'
import ScrollReveal from '@/components/motion/ScrollReveal'
import ProjectMedia from './ProjectMedia'
import ProjectActions from './ProjectActions'
import { cn } from '@/utils/cn'
import styles from './ProjectShowcaseRow.module.css'

/**
 * Alternating project row for the remaining project list.
 */
export default function ProjectShowcaseRow({ project, reverse = false }) {
  if (!project) return null

  return (
    <ScrollReveal>
      <article
        className={cn(styles.row, reverse && styles.reverse)}
        aria-label={project.title}
      >
        <div className={styles.mediaWrap}>
          <ProjectMedia project={project} />
        </div>

        <div className={styles.content}>
          <div className={styles.meta}>
            {project.category && (
              <Badge variant="accent">{project.category}</Badge>
            )}
            {project.status && <Badge>{project.status}</Badge>}
          </div>

          <h3 className={styles.title}>{project.title}</h3>

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

          <ProjectActions project={project} />
        </div>
      </article>
    </ScrollReveal>
  )
}
