import SectionWrapper from '@/components/layout/SectionWrapper'
import ScrollReveal from '@/components/motion/ScrollReveal'
import { hasItems, hasText, normalizeListItems } from '@/components/project/utils'
import styles from './ProjectWorkflow.module.css'

/**
 * Horizontal product workflow timeline. Hidden when empty.
 */
export default function ProjectWorkflow({ workflow }) {
  const steps = normalizeListItems(workflow, (item, index) => ({
    id: item.id || `step-${index}`,
    title: item.title || item.label || '',
    description: item.description || item.detail || null,
  })).filter((item) => item.title)

  if (!hasItems(steps)) return null

  return (
    <SectionWrapper
      title="Workflow"
      subtitle="The product flow from start to finish."
      index="02"
      variant="secondary"
      titleGradient
    >
      <ScrollReveal>
        <ol className={styles.track} role="list">
          {steps.map((step, index) => (
            <li key={step.id} className={styles.step}>
              <div className={styles.marker} aria-hidden="true">
                <span className={styles.index}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                {index < steps.length - 1 && <span className={styles.line} />}
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{step.title}</h3>
                {hasText(step.description) && (
                  <p className={styles.description}>{step.description}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </SectionWrapper>
  )
}
