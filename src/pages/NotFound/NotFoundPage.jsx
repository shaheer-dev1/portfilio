import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/motion/FadeIn'
import styles from './NotFoundPage.module.css'

/**
 * Lightweight not-found view for unknown routes and missing project slugs.
 */
export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <Container>
        <FadeIn className={styles.content}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.body}>
            The page you&apos;re looking for doesn&apos;t exist or the project slug is invalid.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" href="/">
              Back to Home
            </Button>
            <Button variant="outline" href="/projects">
              View Projects
            </Button>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}
