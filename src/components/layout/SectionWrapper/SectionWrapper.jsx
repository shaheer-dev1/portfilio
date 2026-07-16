import { cn } from '@/utils/cn'
import Container from '@/components/layout/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import SectionSubtitle from '@/components/ui/SectionSubtitle'
import styles from './SectionWrapper.module.css'

/**
 * Semantic section wrapper with optional header and background variant.
 */
export default function SectionWrapper({
  id,
  children,
  title,
  subtitle,
  index,
  variant = 'primary',
  compact = false,
  noPadding = false,
  headerCentered = false,
  titleGradient = false,
  className,
  containerClassName,
  ariaLabel,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn(
        styles.section,
        styles[variant],
        compact && styles.compact,
        noPadding && styles.noPadding,
        className
      )}
      aria-label={ariaLabel || title}
      {...props}
    >
      <div className={styles.lighting} aria-hidden="true" />
      <Container className={cn(styles.content, containerClassName)}>
        {(title || subtitle) && (
          <header
            className={cn(
              styles.header,
              headerCentered && styles.headerCentered
            )}
          >
            {title && (
              <SectionTitle index={index} gradient={titleGradient}>
                {title}
              </SectionTitle>
            )}
            {subtitle && (
              <SectionSubtitle
                centered={headerCentered}
                className={styles.subtitle}
              >
                {subtitle}
              </SectionSubtitle>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  )
}
