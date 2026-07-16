import { useParams } from 'react-router-dom'
import { getAdjacentProjects } from '@/data/projects'
import { getProjectDetails } from '@/data/projectLoader'
import NotFoundPage from '@/pages/NotFound'
import Footer from '@/sections/Footer'
import {
  ProjectHero,
  ProjectOverview,
  ProjectWorkflow,
  ProjectFeatures,
  ProjectGallery,
  ProjectTechStack,
  ProjectArchitecture,
  ProjectChallenges,
  ProjectLearnings,
  ProjectResults,
  ProjectNextVersion,
  ProjectNavigation,
  ProjectCTA,
} from '@/components/project'
import styles from './ProjectDetailsPage.module.css'

/**
 * Reusable premium case-study template.
 * Renders only from loaded data — never project-specific JSX.
 */
export default function ProjectDetailsPage() {
  const { slug } = useParams()
  const details = getProjectDetails(slug)

  if (!details) {
    return <NotFoundPage />
  }

  const { caseStudy, ...project } = details
  const study = caseStudy || {}
  const { previous, next } = getAdjacentProjects(project.slug)

  return (
    <div className={styles.page}>
      <ProjectHero project={project} caseStudy={study} />

      <ProjectOverview
        overview={study.overview}
        problem={study.problem}
        solution={study.solution}
        outcome={study.outcome}
      />

      <ProjectWorkflow workflow={study.workflow} />

      <ProjectFeatures features={study.features} />

      <ProjectGallery gallery={study.gallery} />

      <ProjectTechStack
        technologies={project.technologies}
        techGroups={study.techGroups}
        techHighlights={study.techHighlights}
      />

      <ProjectArchitecture architecture={study.architecture} />

      <ProjectChallenges challenges={study.challenges} />

      <ProjectLearnings learnings={study.learnings} />

      <ProjectResults results={study.results} />

      <ProjectNextVersion
        nextSteps={study.nextSteps}
        nextVersion={study.nextVersion}
      />

      <ProjectNavigation previous={previous} next={next} />

      <ProjectCTA contactHref="/#contact" />

      <Footer />
    </div>
  )
}
