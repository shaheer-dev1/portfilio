import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useNavigation } from '@/hooks/useNavigation'
import { navigationLinks, resumeLink } from '@/data/navigation'
import Button from '@/components/ui/Button'
import NavLink from './NavLink'
import {
  mobileMenuVariants,
  mobileMenuItemVariants,
} from '@/animations/variants'
import styles from './MobileMenu.module.css'

/**
 * Animated mobile navigation drawer.
 */
export default function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu, isLinkActive } = useNavigation()

  const handleLinkClick = () => {
    closeMobileMenu()
  }

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <motion.nav
            id="mobile-menu"
            className={styles.menu}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            aria-label="Mobile navigation"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>

            <div className={styles.nav}>
              {navigationLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  custom={i}
                  variants={mobileMenuItemVariants}
                  initial="closed"
                  animate="open"
                >
                  <NavLink
                    href={link.href}
                    label={link.label}
                    isActive={isLinkActive(link)}
                    onClick={handleLinkClick}
                    variant="mobile"
                  />
                </motion.div>
              ))}
            </div>

            <div className={styles.footer}>
              <Button
                variant="primary"
                href={resumeLink.href}
                fullWidth
                onClick={handleLinkClick}
                {...(resumeLink.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {resumeLink.label}
              </Button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
