import GlowOrb from '@/components/background/GlowOrb'
import styles from './BackgroundCanvas.module.css'

/**
 * Layered background with gradient mesh, grid, orbs, and vignette.
 */
export default function BackgroundCanvas() {
  return (
    <div className={styles.canvas} aria-hidden="true">
      <div className={styles.mesh} />
      <div className={styles.orbs}>
        <GlowOrb color="blue" position="topLeft" />
        <GlowOrb color="purple" position="topRight" />
        <GlowOrb color="cyan" position="bottomCenter" />
      </div>
      <div className={styles.grid} />
      <div className={styles.vignette} />
    </div>
  )
}
