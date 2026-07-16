/**
 * Social / contact channel links.
 */
export const socialLinks = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:shaheer.qureshi.dev@gmail.com',
    external: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/shaheer-dev1',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shaheer-qureshi-849034379',
    external: true,
  },
]

export const activeSocialLinks = socialLinks.filter((link) => Boolean(link.href))
