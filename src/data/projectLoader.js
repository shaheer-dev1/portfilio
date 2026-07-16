import { getProjectBySlug, projects } from '@/data/projects'
import { getCaseStudyBySlug } from '@/data/caseStudies'

/**
 * Loads project metadata + case study into one unified details object.
 * Returns null when the slug does not match any project.
 */
export function getProjectDetails(slug) {
  const project = getProjectBySlug(slug)

  if (!project) {
    return null
  }

  const caseStudy = getCaseStudyBySlug(slug)

  return {
    ...project,
    caseStudy,
  }
}

/**
 * All projects with optional case study attachment.
 * Useful for listing pages without duplicate lookups.
 */
export function getAllProjectDetails() {
  return projects.map((project) => ({
    ...project,
    caseStudy: getCaseStudyBySlug(project.slug),
  }))
}
