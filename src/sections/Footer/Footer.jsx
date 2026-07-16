import { profile } from '@/data/profile'
import { navigationLinks } from '@/data/navigation'
import { activeSocialLinks } from '@/data/socials'
import { SITE } from '@/utils/constants'
import Container from '@/components/layout/Container'
import AnimatedDivider from '@/components/ui/AnimatedDivider'
import styles from './Footer.module.css'

/**
 * Site footer with navigation, social links, and attribution.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <Container>
        <AnimatedDivider className={styles.divider} />

        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo} aria-label={`${SITE.name} — Home`}>
              <span className={styles.logoMark} aria-hidden="true">
                {SITE.author.charAt(0)}
              </span>
              <span className={styles.logoText}>{SITE.name}</span>
            </a>
            <p className={styles.tagline}>{profile.tagline}</p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <p className={styles.navTitle}>Navigate</p>
            <ul className={styles.links} role="list">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.nav} aria-label="Social links">
            <p className={styles.navTitle}>Connect</p>
            <ul className={styles.links} role="list">
              {activeSocialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={styles.link}
                    {...(link.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className={styles.note}>{profile.footer.note}</p>
        </div>
      </Container>
    </footer>
  )
}
