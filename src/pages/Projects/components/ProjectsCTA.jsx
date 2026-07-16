import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/layout/SectionWrapper'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/motion/FadeIn'
import styles from './ProjectsCTA.module.css'

/**
 * Closing CTA for the projects showcase page.
 */
export default function ProjectsCTA() {
  return (
    <SectionWrapper variant="secondary" compact ariaLabel="Contact call to action">
      <FadeIn className={styles.content}>
        <h2 className={styles.title}>Have a project in mind?</h2>
        <p className={styles.body}>
          If you need a product interface, a full-stack application, or a frontend system
          your team can grow with — let&apos;s talk.
        </p>
        <Button
          variant="primary"
          href="/#contact"
          icon={<ArrowRight size={16} />}
          iconPosition="right"
        >
          Get in Touch
        </Button>
      </FadeIn>
    </SectionWrapper>
  )
}
