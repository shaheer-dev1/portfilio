import { getAllProjectDetails } from '@/data/projectLoader'
import Container from '@/components/layout/Container'
import Footer from '@/sections/Footer'
import FadeIn from '@/components/motion/FadeIn'
import ProjectsHero from './components/ProjectsHero'
import FeaturedProject from './components/FeaturedProject'
import ProjectShowcaseRow from './components/ProjectShowcaseRow'
import ProjectsCTA from './components/ProjectsCTA'
import styles from './ProjectsPage.module.css'

/**
 * Splits projects into one featured lead and the remaining showcase list.
 * Respects featured flag, then original data order as priority.
 */
function partitionProjects(projects) {
  if (!Array.isArray(projects) || projects.length === 0) {
    return { featured: null, remaining: [] }
  }

  const featuredIndex = projects.findIndex((project) => project.featured)
  const leadIndex = featuredIndex >= 0 ? featuredIndex : 0
  const featured = projects[leadIndex]
  const remaining = projects.filter((_, index) => index !== leadIndex)

  return { featured, remaining }
}

/**
 * Premium projects showcase page.
 */
export default function ProjectsPage() {
  const projects = getAllProjectDetails()
  const { featured, remaining } = partitionProjects(projects)

  return (
    <div className={styles.page}>
      <ProjectsHero projectCount={projects.length} />

      {featured ? (
        <FeaturedProject project={featured} />
      ) : (
        <Container>
          <FadeIn>
            <p className={styles.empty}>
              Projects will appear here once added to the data layer.
            </p>
          </FadeIn>
        </Container>
      )}

      {remaining.length > 0 && (
        <section className={styles.list} aria-label="More projects">
          <Container>
            <div className={styles.listInner}>
              {remaining.map((project, index) => (
                <ProjectShowcaseRow
                  key={project.id}
                  project={project}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      <ProjectsCTA />
      <Footer />
    </div>
  )
}
