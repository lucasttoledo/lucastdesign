import { BriefcaseBusiness, CircleUserRound, Instagram, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Projetos', href: '#projetos', icon: BriefcaseBusiness },
  { label: 'Estratégia', href: '#pilares', icon: Instagram },
  { label: 'Sobre', href: '#sobre', icon: CircleUserRound },
  { label: 'Contato', href: 'mailto:oi@lucastdesign.com.br', icon: Mail },
]

export default function SiteHeader({ projectPage = false }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const homeHref = projectPage ? '/' : ''

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 40)

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <a className="wordmark" href={`${homeHref}#inicio`} aria-label="Lucas T Design, início">
        <img src="/assets/lucastdesign_logo.svg" alt="Lucas T Design" />
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        {navItems.map(({ label, href, icon: Icon }) => (
          <a key={label} href={projectPage && href.startsWith('#') ? `/${href}` : href}>
            <Icon size={24} strokeWidth={1.8} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <a className="header-email" href="mailto:lucastdesign@gmail.com">
        lucastdesign@gmail.com
      </a>
    </header>
  )
}