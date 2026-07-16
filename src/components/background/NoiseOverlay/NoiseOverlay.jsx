import styles from './NoiseOverlay.module.css'

/**
 * Subtle noise texture overlay for depth.
 */
export default function NoiseOverlay() {
  return <div className={styles.overlay} aria-hidden="true" />
}
