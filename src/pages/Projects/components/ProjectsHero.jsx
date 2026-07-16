import Container from '@/components/layout/Container'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/motion/FadeIn'
import styles from './ProjectsHero.module.css'

/**
 * Projects page introduction.
 */
export default function ProjectsHero({ projectCount }) {
  return (
    <section className={styles.hero} aria-label="Projects introduction">
      <Container>
        <FadeIn className={styles.content}>
          <Badge variant="accent" className={styles.label}>
            Work
          </Badge>
          <h1 className={styles.title}>Selected projects</h1>
          <p className={styles.description}>
            A focused collection of product interfaces and systems — crafted for clarity,
            performance, and a premium feel.
          </p>
          {typeof projectCount === 'number' && projectCount > 0 && (
            <p className={styles.count}>
              <span className={styles.countValue}>{projectCount}</span>
              <span className={styles.countLabel}>
                {projectCount === 1 ? 'project' : 'projects'}
              </span>
            </p>
          )}
        </FadeIn>
      </Container>
    </section>
  )
}
