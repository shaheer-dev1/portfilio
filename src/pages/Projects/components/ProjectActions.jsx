import Button from '@/components/ui/Button'
import { ArrowUpRight, FolderGit2, Play } from 'lucide-react'
import styles from './ProjectActions.module.css'

/**
 * Data-driven project actions. Only renders buttons with valid destinations.
 */
export default function ProjectActions({ project, size = 'md' }) {
  if (!project) return null

  const actions = []

  if (project.slug) {
    actions.push({
      id: 'case-study',
      label: 'View Case Study',
      href: `/projects/${project.slug}`,
      variant: 'primary',
      icon: <ArrowUpRight size={16} />,
      iconPosition: 'right',
      external: false,
    })
  }

  if (project.liveDemo) {
    actions.push({
      id: 'live-demo',
      label: 'Launch App',
      href: project.liveDemo,
      variant: 'outline',
      icon: <ArrowUpRight size={16} />,
      iconPosition: 'right',
      external: true,
    })
  }

  if (project.github) {
    actions.push({
      id: 'github',
      label: 'GitHub',
      href: project.github,
      variant: 'outline',
      icon: <FolderGit2 size={16} />,
      iconPosition: 'left',
      external: true,
    })
  }

  if (project.watchDemo) {
    actions.push({
      id: 'watch-demo',
      label: 'Watch Demo',
      href: project.watchDemo,
      variant: 'ghost',
      icon: <Play size={16} />,
      iconPosition: 'left',
      external: true,
    })
  }

  if (actions.length === 0) return null

  return (
    <div className={styles.actions}>
      {actions.map((action) => (
        <Button
          key={action.id}
          variant={action.variant}
          size={size}
          href={action.href}
          icon={action.icon}
          iconPosition={action.iconPosition}
          {...(action.external && {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
        >
          {action.label}
        </Button>
      ))}
    </div>
  )
}
