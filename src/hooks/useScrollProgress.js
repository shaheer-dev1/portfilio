import { useState, useEffect } from 'react'
import { SCROLL_THRESHOLD } from '@/utils/constants'

/**
 * Tracks whether the page has scrolled past a threshold.
 */
export function useScrollProgress(threshold = SCROLL_THRESHOLD) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrollY(currentY)
      setIsScrolled(currentY > threshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return { isScrolled, scrollY }
}
