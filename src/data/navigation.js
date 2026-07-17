import resumePdf from '@/assets/Shaheer_Qureshi_Resume.pdf'

export const navigationLinks = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'skills', label: 'Skills', href: '/#skills' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
]

export const resumeLink = {
  label: 'Resume',
  href: resumePdf,
  download: 'Shaheer_Qureshi_Resume.pdf',
  external: false,
}
