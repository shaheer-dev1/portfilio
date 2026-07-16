import { useState, useEffect, useCallback } from 'react'
import { NAVBAR_OFFSET } from '@/utils/constants'

/**
 * Observes sections and returns the currently active section id.
 */
export function useActiveSection(sectionIds, options = {}) {
  const { offset = NAVBAR_OFFSET + 20, rootMargin } = options
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '')

  const handleIntersect = useCallback(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible.length > 0) {
        setActiveSection(visible[0].target.id)
      }
    },
    []
  )

  useEffect(() => {
    if (!sectionIds.length) return

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: rootMargin || `-${offset}px 0px -60% 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    })

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds, offset, rootMargin, handleIntersect])

  return activeSection
}
