import { ArrowLeft, ArrowUpRight, FolderGit2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import GlassCard from '@/components/ui/GlassCard'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/motion/FadeIn'
import Spotlight from '@/components/effects/Spotlight'
import BrowserFrame from '@/components/project/BrowserFrame'
import ProjectBrandMark from '@/components/project/ProjectBrandMark'
import { hasText } from '@/components/project/utils'
import styles from './ProjectHero.module.css'

function buildMetaCards(project, caseStudy) {
  const study = caseStudy || {}
  const cards = [
    { id: 'role', label: 'Role', value: study.role || project.role },
    { id: 'team', label: 'Team', value: study.team || project.team },
    { id: 'status', label: 'Status', value: project.status || study.status },
    { id: 'year', label: 'Year', value: project.year ?? study.year },
  ]

  return cards.filter((card) => {
    if (card.value == null || card.value === '') return false
    return String(card.value).trim().length > 0
  })
}

/**
 * Large product-launch hero with browser showcase and metadata strip.
 */
export default function ProjectHero({ project, caseStudy }) {
  if (!project) return null

  const {
    title,
    subtitle,
    category,
    shortDescription,
    technologies,
    github,
    liveDemo,
    logo,
    slug,
  } = project

  const study = caseStudy || {}
  const metaCards = buildMetaCards(project, caseStudy)
  const tech = Array.isArray(technologies)
    ? technologies.filter((item) => hasText(item))
    : []
  const description =
    hasText(study.heroDescription) ? study.heroDescription : shortDescription
  const projectSubtitle = hasText(subtitle)
    ? subtitle
    : hasText(study.subtitle)
      ? study.subtitle
      : null

  const initials = (title || 'P')
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()

  return (
    <section className={styles.hero} aria-label={`${title} overview`}>
      <Spotlight className={styles.spotlight}>
        <Container>
          <FadeIn>
            <Link to="/projects" className={styles.back}>
              <ArrowLeft size={16} aria-hidden="true" />
              All projects
            </Link>
          </FadeIn>

          <div className={styles.grid}>
            <FadeIn delay={0.06} className={styles.content}>
              <div className={styles.badges}>
                {hasText(category) && (
                  <Badge variant="accent">{category}</Badge>
                )}
              </div>

              <h1 className={styles.title}>{title}</h1>

              {hasText(projectSubtitle) && (
                <p className={styles.subtitle}>{projectSubtitle}</p>
              )}

              {hasText(description) && (
                <p className={styles.description}>{description}</p>
              )}

              {tech.length > 0 && (
                <div className={styles.tags}>
                  {tech.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              )}

              {(liveDemo || github) && (
                <div className={styles.actions}>
                  {liveDemo && (
                    <Button
                      variant="primary"
                      size="lg"
                      href={liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<ArrowUpRight size={16} />}
                      iconPosition="right"
                    >
                      Launch App
                    </Button>
                  )}
                  {github && (
                    <Button
                      variant="outline"
                      size="lg"
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<FolderGit2 size={16} />}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              )}
            </FadeIn>

            <FadeIn delay={0.12} className={styles.showcase}>
              <BrowserFrame large url={slug ? `${slug}.app` : undefined}>
                {logo ? (
                  <ProjectBrandMark
                    src={logo}
                    alt={`${title} logo`}
                    variant="hero"
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <div className={styles.placeholderGlow} />
                    <div className={styles.placeholderGrid} />
                    <span className={styles.placeholderMark}>{initials}</span>
                    <span className={styles.placeholderLabel}>
                      {category || 'Product preview'}
                    </span>
                  </div>
                )}
              </BrowserFrame>
            </FadeIn>
          </div>

          {metaCards.length > 0 && (
            <FadeIn delay={0.16} className={styles.metaGrid}>
              {metaCards.map((card) => (
                <GlassCard key={card.id} padding="sm" className={styles.metaCard}>
                  <p className={styles.metaLabel}>{card.label}</p>
                  <p className={styles.metaValue}>{card.value}</p>
                </GlassCard>
              ))}
            </FadeIn>
          )}
        </Container>
      </Spotlight>
    </section>
  )
}
