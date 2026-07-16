import BackgroundCanvas from '@/components/background/BackgroundCanvas'
import NoiseOverlay from '@/components/background/NoiseOverlay'
import Navbar from '@/components/layout/Navbar'
import styles from './AppLayout.module.css'

/**
 * Root application layout with background layers and navigation.
 */
export default function AppLayout({ children }) {
  return (
    <div className={styles.shell}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <BackgroundCanvas />
      <NoiseOverlay />

      <Navbar />

      <main id="main-content" className={styles.main} tabIndex={-1}>
        {children}
      </main>
    </div>
  )
}
