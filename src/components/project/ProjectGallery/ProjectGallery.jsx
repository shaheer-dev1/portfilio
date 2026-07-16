import SectionWrapper from '@/components/layout/SectionWrapper'
import FadeIn from '@/components/motion/FadeIn'
import BrowserFrame from '@/components/project/BrowserFrame'
import { hasItems } from '@/components/project/utils'
import styles from './ProjectGallery.module.css'

/**
 * Highlight screenshot gallery in browser frames.
 * Shows an elegant empty state when no screenshots exist.
 */
export default function ProjectGallery({ gallery }) {
  const items = Array.isArray(gallery)
    ? gallery.filter((item) => item && item.src)
    : []

  const hasScreenshots = hasItems(items)

  return (
    <SectionWrapper
      title="Screenshots"
      subtitle="Product visuals from the experience."
      index="04"
      variant="secondary"
      titleGradient
    >
      {hasScreenshots ? (
        <div className={styles.stack}>
          {items.map((item, index) => (
            <FadeIn
              key={item.id || item.src || index}
              delay={Math.min(index * 0.06, 0.24)}
              className={styles.item}
            >
              <BrowserFrame large url={item.caption || item.alt || 'screenshot'}>
                <img
                  src={item.src}
                  alt={item.alt || item.caption || 'Project screenshot'}
                  className={styles.image}
                  loading="lazy"
                />
              </BrowserFrame>
              {item.caption && (
                <p className={styles.caption}>{item.caption}</p>
              )}
            </FadeIn>
          ))}
        </div>
      ) : (
        <FadeIn>
          <div className={styles.empty}>
            <BrowserFrame large url="gallery">
              <div className={styles.emptyInner}>
                <p className={styles.emptyTitle}>Project screenshots will appear here</p>
                <p className={styles.emptyBody}>
                  Visuals will be added when product captures are ready.
                </p>
              </div>
            </BrowserFrame>
          </div>
        </FadeIn>
      )}
    </SectionWrapper>
  )
}
