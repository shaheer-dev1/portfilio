/**
 * Shared Framer Motion animation variants.
 * All entrance animations respect reduced motion via useReducedMotion hook in wrappers.
 */

export const EASE = {
  outExpo: [0.16, 1, 0.3, 1],
  inOut: [0.45, 0, 0.55, 1],
}

export const DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
}

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.outExpo,
    },
  },
}

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.outExpo,
    },
  },
}

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.outExpo,
    },
  },
}

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.outExpo,
    },
  },
}

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASE.outExpo,
    },
  },
}

export const zoom = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASE.outExpo,
    },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

export const viewportConfig = {
  once: true,
  margin: '-80px',
  amount: 0.2,
}

export const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASE.outExpo,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: DURATION.fast,
      ease: EASE.inOut,
    },
  },
}

export const navbarVariants = {
  top: {
    backgroundColor: 'rgba(5, 8, 22, 0)',
    borderBottomColor: 'rgba(255, 255, 255, 0)',
    backdropFilter: 'blur(0px)',
  },
  scrolled: {
    backgroundColor: 'rgba(5, 8, 22, 0.72)',
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(24px)',
    transition: {
      duration: DURATION.normal,
      ease: EASE.outExpo,
    },
  },
}

export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: DURATION.normal,
      ease: EASE.inOut,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.outExpo,
    },
  },
}

export const mobileMenuItemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06,
      duration: DURATION.normal,
      ease: EASE.outExpo,
    },
  }),
}

export const buttonTap = {
  scale: 0.98,
  transition: { duration: DURATION.fast },
}

export const buttonHover = {
  y: -2,
  transition: { duration: DURATION.fast, ease: EASE.outExpo },
}
