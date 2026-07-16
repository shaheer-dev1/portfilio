import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { DURATION, EASE, staggerContainerSlow } from '@/animations/variants'
import styles from './TextReveal.module.css'

const wordVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slower,
      ease: EASE.outExpo,
    },
  },
}

const lineVariant = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slower,
      ease: EASE.outExpo,
    },
  },
}

/**
 * Word or line split animation for hero headlines.
 */
export default function TextReveal({
  text,
  lines,
  highlightLine,
  splitBy = 'word',
  as: Component = 'h1',
  className,
  lineClassName,
  highlightClassName,
  delay = 0,
  animateOnMount = true,
  ...props
}) {
  const reducedMotion = useReducedMotion()

  if (lines?.length) {
    const content = lines.join(' ')

    if (reducedMotion) {
      return (
        <Component className={className} {...props}>
          {lines.map((line, index) => (
            <span
              key={line}
              className={cn(
                styles.line,
                index === highlightLine && styles.highlight,
                lineClassName,
                index === highlightLine && highlightClassName
              )}
            >
              {line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </Component>
      )
    }

    return (
      <Component className={className} aria-label={content} {...props}>
        <motion.span
          className={styles.lineGroup}
          initial="hidden"
          animate={animateOnMount ? 'visible' : undefined}
          whileInView={animateOnMount ? undefined : 'visible'}
          viewport={animateOnMount ? undefined : { once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: delay,
              },
            },
          }}
        >
          {lines.map((line, index) => (
            <motion.span
              key={line}
              className={cn(
                styles.line,
                index === highlightLine && styles.highlight,
                lineClassName,
                index === highlightLine && highlightClassName
              )}
              variants={lineVariant}
            >
              {line}
              {index < lines.length - 1 && <br />}
            </motion.span>
          ))}
        </motion.span>
      </Component>
    )
  }

  const parts =
    splitBy === 'line' ? text.split('\n') : text.split(/(\s+)/).filter(Boolean)

  if (reducedMotion) {
    return (
      <Component className={className} {...props}>
        {text}
      </Component>
    )
  }

  const containerVariant = {
    ...staggerContainerSlow,
    visible: {
      transition: {
        staggerChildren: splitBy === 'word' ? 0.06 : 0.12,
        delayChildren: delay,
      },
    },
  }

  return (
    <Component className={className} aria-label={text} {...props}>
      <motion.span
        className={styles.wordGroup}
        initial="hidden"
        animate={animateOnMount ? 'visible' : undefined}
        whileInView={animateOnMount ? undefined : 'visible'}
        viewport={animateOnMount ? undefined : { once: true }}
        variants={containerVariant}
      >
        {parts.map((part, index) =>
          /^\s+$/.test(part) ? (
            part
          ) : (
            <motion.span
              key={`${part}-${index}`}
              className={styles.word}
              variants={wordVariant}
              aria-hidden="true"
            >
              {part}
            </motion.span>
          )
        )}
      </motion.span>
    </Component>
  )
}
