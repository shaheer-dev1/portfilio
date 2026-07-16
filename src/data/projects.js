import voiceXDashboardImg from '@/assets/projects/voicex/dashboard.png'
import voiceXLogo from '@/assets/projects/voicex/logo.png'
import mediFlowHomeImg from '@/assets/projects/Mediflow/home.png'
import mediFlowLogo from '@/assets/projects/Mediflow/logo.png'
import newsSenseHomeImg from '@/assets/projects/NewsSense/home.png'

/**
 * Project metadata only.
 * Full case studies live in caseStudies.js and are merged via projectLoader.js.
 *
 * To add a project: append one object here and a matching entry in caseStudies.js.
 * Homepage Featured Projects, /projects, and /projects/:slug all read from this list.
 *
 * Optional fields:
 * - logo: imported image (shown in project hero when present; omit or null to hide)
 * - subtitle: secondary line under the title
 */
export const projects = [
  {
    id: 'newssense',
    slug: 'newssense',
    title: 'NewsSense',
    subtitle: 'Pakistani News Semantic Search Engine',
    category: 'AI Engineering',
    featured: true,
    shortDescription:
      'An AI-powered semantic search platform that retrieves Pakistani English and Urdu news articles based on semantic meaning instead of exact keyword matching using transformer embeddings and vector databases.',
    technologies: [
      'Python',
      'FastAPI',
      'Gradio',
      'Sentence Transformers',
      'ChromaDB',
      'FAISS',
      'NumPy',
      'Pandas',
      'AI',
      'NLP',
    ],
    thumbnail: newsSenseHomeImg,
    logo: null,
    status: 'Completed',
    year: 2026,
    github: null,
    liveDemo: null,
  },
  {
    id: 'voicex',
    slug: 'voicex',
    title: 'VoiceX',
    subtitle: null,
    category: 'University Complaint Management Portal',
    featured: true,
    shortDescription:
      'VoiceX is a full-stack University Complaint Management Portal that allows students to submit complaints, track their progress, receive automated notifications, and provide feedback after resolution while enabling administrators to manage the complete complaint lifecycle.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    thumbnail: voiceXDashboardImg,
    logo: voiceXLogo,
    status: null,
    year: null,
    github: null,
    liveDemo: null,
  },
  {
    id: 'mediflow',
    slug: 'mediflow',
    title: 'MediFlow',
    subtitle: 'Appointment Management System',
    category: 'Healthcare Platform',
    featured: true,
    shortDescription:
      'A centralized healthcare management platform built using Oracle APEX and Oracle Database to manage doctors, patients, appointments, departments, prescriptions, billing, and analytics through a unified administrative dashboard.',
    technologies: [
      'Oracle APEX',
      'Oracle Database',
      'PL/SQL',
      'SQL',
      'Healthcare',
      'Analytics',
      'CRUD',
    ],
    thumbnail: mediFlowHomeImg,
    logo: mediFlowLogo,
    status: 'Completed',
    year: 2025,
    github: null,
    liveDemo: null,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null
}

export function getProjectById(id) {
  return projects.find((project) => project.id === id) ?? null
}

/**
 * Adjacent projects in list order for previous/next navigation.
 */
export function getAdjacentProjects(slug) {
  const index = projects.findIndex((project) => project.slug === slug)

  if (index < 0) {
    return { previous: null, next: null }
  }

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
