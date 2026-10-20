import { FaBehance, FaLinkedinIn, FaMedium, FaXTwitter } from 'react-icons/fa6'
import { Mail } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <p>© {new Date().getFullYear()} Lucastdesign. Todos os direitos reservados.</p>
        <nav className="footer-socials" aria-label="Redes sociais">
          <a href="mailto:oi@lucastdesign.com.br" aria-label="E-mail">
            <Mail aria-hidden="true" />
          </a>
          <a href="https://www.behance.net/lucasttoledo" aria-label="Behance" target="_blank" rel="noreferrer">
            <FaBehance aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/lucastdesign" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <FaLinkedinIn aria-hidden="true" />
          </a>
          <a href="https://x.com/lucasttoledo" aria-label="X" target="_blank" rel="noreferrer">
            <FaXTwitter aria-hidden="true" />
          </a>
          <a href="https://lucastdesign.medium.com/" aria-label="Medium" target="_blank" rel="noreferrer">
            <FaMedium aria-hidden="true" />
          </a>
        </nav>
      </div>
      <a className="footer-brand" href="/#inicio" aria-label="Lucas T Design, voltar ao início">
        <img src="/assets/lucastdesign_footer.svg" alt="Lucas T Design" />
      </a>
    </footer>
  )
}
