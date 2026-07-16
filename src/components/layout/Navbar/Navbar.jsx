import { Menu } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useNavigation } from '@/hooks/useNavigation'
import { navigationLinks, resumeLink } from '@/data/navigation'
import { SITE } from '@/utils/constants'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import NavLink from './NavLink'
import MobileMenu from './MobileMenu'
import styles from './Navbar.module.css'

/**
 * Premium sticky top navbar with glass treatment.
 */
export default function Navbar() {
  const {
    isScrolled,
    isLinkActive,
    isMobileMenuOpen,
    toggleMobileMenu,
  } = useNavigation()

  return (
    <>
      <header
        className={cn(styles.navbar, isScrolled && styles.scrolled)}
        role="banner"
      >
        <Container className={styles.container}>
          <div className={styles.inner}>
            <a href="#" className={styles.logo} aria-label={`${SITE.name} — Home`}>
              <span className={styles.logoMark} aria-hidden="true">
                {SITE.author.charAt(0)}
              </span>
              <span className={styles.logoText}>{SITE.name}</span>
            </a>

            <nav className={styles.nav} aria-label="Main navigation">
              <ul className={styles.links} role="list">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      href={link.href}
                      label={link.label}
                      isActive={isLinkActive(link)}
                    />
                  </li>
                ))}
              </ul>

              <div className={styles.actions}>
                <Button
                  variant="primary"
                  size="sm"
                  href={resumeLink.href}
                  className={styles.resume}
                  {...(resumeLink.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {resumeLink.label}
                </Button>

                <button
                  type="button"
                  className={styles.menuButton}
                  onClick={toggleMobileMenu}
                  aria-label="Open menu"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <Menu size={20} />
                </button>
              </div>
            </nav>
          </div>
        </Container>
      </header>

      <MobileMenu />
    </>
  )
}
