import { ArrowRight, ChevronDown, Code2, Layers, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import GlowBorder from '@/components/ui/GlowBorder'
import Spotlight from '@/components/effects/Spotlight'
import TextReveal from '@/components/motion/TextReveal'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren from '@/components/motion/StaggerChildren'
import { fadeUp } from '@/animations/variants'
import styles from './Hero.module.css'

const highlightIcons = {
  sparkles: Sparkles,
  code: Code2,
  layers: Layers,
}

/**
 * Full-viewport hero with text reveal, spotlight, and abstract visual.
 */
export default function Hero() {
  const { headline, tagline, title, availability, hero: heroCta } = profile

  return (
    <section className={styles.hero} aria-label="Introduction">
      <Spotlight className={styles.spotlight}>
        <Container className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <FadeIn delay={0.1}>
                <Badge variant="accent" showDot className={styles.badge}>
                  {availability.label}
                </Badge>
              </FadeIn>

              <TextReveal
                lines={headline.lines}
                highlightLine={headline.highlightLine}
                className={styles.headline}
                delay={0.15}
              />

              <FadeIn delay={0.35} className={styles.lead}>
                <p className="text-body-lg text-secondary">{tagline}</p>
              </FadeIn>

              <FadeIn delay={0.45}>
                <p className={styles.role}>{title}</p>
              </FadeIn>

              <FadeIn delay={0.55}>
                <div className={styles.actions}>
                  <Button
                    variant="primary"
                    size="lg"
                    href={heroCta.primaryCta.href}
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                  >
                    {heroCta.primaryCta.label}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href={heroCta.secondaryCta.href}
                  >
                    {heroCta.secondaryCta.label}
                  </Button>
                </div>
              </FadeIn>
            </div>

            <FadeIn
              delay={0.4}
              variant={fadeUp}
              className={styles.visual}
              as="div"
            >
              <HeroVisual highlights={heroCta.highlights} />
            </FadeIn>
          </div>

          <motion.a
            href="#about"
            className={styles.scrollHint}
            aria-label="Scroll to about section"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-overline text-muted">Scroll</span>
            <ChevronDown size={18} className={styles.scrollIcon} aria-hidden="true" />
          </motion.a>
        </Container>
      </Spotlight>
    </section>
  )
}

function HeroVisual({ highlights }) {
  return (
    <div className={styles.visualWrapper} aria-hidden="true">
      <div className={styles.visualGlow} />
      <GlowBorder animated glow className={styles.visualCard}>
        <div className={styles.visualInner}>
          <div className={styles.visualHeader}>
            <span className={styles.visualDot} />
            <span className={styles.visualDot} />
            <span className={styles.visualDot} />
          </div>

          <StaggerChildren className={styles.visualStack}>
            {highlights.map((item) => {
              const Icon = highlightIcons[item.icon] || Sparkles

              return (
                <motion.div
                  key={item.id}
                  className={styles.visualItem}
                  variants={fadeUp}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </motion.div>
              )
            })}
          </StaggerChildren>

          <div className={styles.visualCode}>
            <span className={styles.codeLine}>
              <span className={styles.codeKeyword}>const</span>{' '}
              <span className={styles.codeName}>developer</span> = {'{'}
            </span>
            <span className={styles.codeLine}>
              {'  '}
              <span className={styles.codeName}>name</span>:{' '}
              <span className={styles.codeString}>&quot;Shaheer&quot;</span>,
            </span>
            <span className={styles.codeLine}>
              {'  '}
              <span className={styles.codeName}>role</span>:{' '}
              <span className={styles.codeString}>
                &quot;Full-Stack Developer&quot;
              </span>
              ,
            </span>
            <span className={styles.codeLine}>
              {'  '}
              <span className={styles.codeName}>focus</span>:{' '}
              <span className={styles.codeString}>
                &quot;Modern Web Applications&quot;
              </span>
            </span>
            <span className={styles.codeLine}>{'}'};</span>
            <span className={styles.codeLine}>
              <span className={styles.codeName}>developer</span>.
              <span className={styles.codeName}>build</span>();
            </span>
          </div>
        </div>
      </GlowBorder>
    </div>
  )
}
