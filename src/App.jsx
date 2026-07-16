import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NavigationProvider } from '@/context/NavigationProvider'
import AppLayout from '@/layouts/AppLayout'
import HomePage from '@/pages/HomePage'
import ProjectsPage from '@/pages/Projects'
import ProjectDetailsPage from '@/pages/ProjectDetails'
import NotFoundPage from '@/pages/NotFound'
import { pageTransition } from '@/animations/variants'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageTransition}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <AppLayout>
          <AnimatedRoutes />
        </AppLayout>
      </NavigationProvider>
    </BrowserRouter>
  )
}
