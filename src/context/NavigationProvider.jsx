import { useState, useMemo, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { navigationLinks } from '@/data/navigation'
import { NavigationContext } from './NavigationContext'

function getHashSectionId(href) {
  if (typeof href !== 'string') return null
  const hashIndex = href.indexOf('#')
  if (hashIndex === -1) return null
  return href.slice(hashIndex + 1) || null
}

/** Homepage section ids derived from hash links only (route links are excluded). */
const sectionIds = navigationLinks
  .map((link) => getHashSectionId(link.href))
  .filter(Boolean)

function isRouteLinkActive(pathname, href) {
  if (!href?.startsWith('/') || href.includes('#')) return false
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function NavigationProvider({ children }) {
  const location = useLocation()
  const { isScrolled, scrollY } = useScrollProgress()
  const activeSection = useActiveSection(sectionIds)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useLockBodyScroll(isMobileMenuOpen)

  const isLinkActive = useCallback(
    (link) => {
      if (!link?.href) return false

      if (isRouteLinkActive(location.pathname, link.href)) {
        return true
      }

      const sectionId = getHashSectionId(link.href)
      if (!sectionId) return false
      if (location.pathname !== '/') return false

      return activeSection === sectionId
    },
    [activeSection, location.pathname]
  )

  const value = useMemo(
    () => ({
      isScrolled,
      scrollY,
      activeSection,
      isLinkActive,
      isMobileMenuOpen,
      openMobileMenu: () => setIsMobileMenuOpen(true),
      closeMobileMenu: () => setIsMobileMenuOpen(false),
      toggleMobileMenu: () => setIsMobileMenuOpen((prev) => !prev),
    }),
    [isScrolled, scrollY, activeSection, isLinkActive, isMobileMenuOpen]
  )

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}
