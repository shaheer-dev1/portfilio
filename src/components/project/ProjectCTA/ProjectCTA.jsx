import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/layout/SectionWrapper'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/motion/FadeIn'
import styles from './ProjectCTA.module.css'

/**
 * Large bottom CTA encouraging contact.
 */
export default function ProjectCTA({ contactHref = '/#contact' }) {
  return (
    <SectionWrapper variant="secondary" ariaLabel="Contact call to action">
      <FadeIn className={styles.content}>
        <p className={styles.eyebrow}>Next step</p>
        <h2 className={styles.title}>Let&apos;s build something exceptional</h2>
        <p className={styles.body}>
          If this kind of product craft fits what you&apos;re building, I&apos;d love to hear about it.
        </p>
        <Button
          variant="primary"
          size="lg"
          href={contactHref}
          icon={<ArrowRight size={16} />}
          iconPosition="right"
        >
          Get in Touch
        </Button>
      </FadeIn>
    </SectionWrapper>
  )
}
