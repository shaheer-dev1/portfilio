import { MapPin, Mail } from 'lucide-react'
import { profile } from '@/data/profile'
import SectionWrapper from '@/components/layout/SectionWrapper'
import Badge from '@/components/ui/Badge'
import GlassCard from '@/components/ui/GlassCard'
import FadeIn from '@/components/motion/FadeIn'
import ScrollReveal from '@/components/motion/ScrollReveal'
import styles from './About.module.css'

/**
 * Personal introduction with focus areas and availability.
 */
export default function About() {
  const { about } = profile.sections

  return (
    <SectionWrapper
      id="about"
      title={about.title}
      subtitle={about.subtitle}
      index={about.index}
      titleGradient
    >
      <div className={styles.grid}>
        <ScrollReveal className={styles.copy}>
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-secondary">
              {paragraph}
            </p>
          ))}

          <ul className={styles.focusList} role="list">
            {profile.focusAreas.map((area) => (
              <li key={area} className={styles.focusItem}>
                <span className={styles.focusDot} aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
            <a className={styles.metaItem} href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </a>
          </div>
        </ScrollReveal>

        <FadeIn delay={0.15} className={styles.aside}>
          <GlassCard padding="lg" className={styles.card}>
            <div className={styles.avatar} aria-hidden="true">
              <span>{profile.avatar.initials}</span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.name}>{profile.name}</h3>
              <p className={styles.title}>{profile.title}</p>
              <Badge variant="success" showDot className={styles.status}>
                {profile.availability.label}
              </Badge>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
