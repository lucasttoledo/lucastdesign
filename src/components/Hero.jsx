import { ArrowUpRight, Plus } from 'lucide-react'
import { useEffect, useRef } from 'react'

function AnimatedText({ text, startIndex = 0 }) {
  return (
    <span role="text" aria-label={text}>
      {[...text].map((character, index) => (
        <span
          key={`${startIndex}-${index}`}
          className="hero-letter"
          aria-hidden="true"
          style={{ animationDelay: `${(startIndex + index) * 32}ms` }}
        >
          {character}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const mockupRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const mockup = mockupRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktopViewport = window.matchMedia('(min-width: 1025px)')

    if (!hero || !mockup || reduceMotion.matches || !desktopViewport.matches) return undefined

    let frameId = null

    const updateParallax = () => {
      frameId = null
      const progress = Math.min(Math.max(-hero.getBoundingClientRect().top / hero.offsetHeight, 0), 1)
      mockup.style.setProperty('--hero-parallax-y', `${-progress * 72}px`)
    }

    const scheduleUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      mockup.style.removeProperty('--hero-parallax-y')
    }
  }, [])

  return (
    <section className="hero" id="inicio" ref={heroRef}>
      <img
        className="hero-mockup"
        src="/assets/lucastdesign_mockup_min.png"
        alt=""
        aria-hidden="true"
        ref={mockupRef}
      />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Olá, me chamo Lucas
          </p>
          <h1>Sou <span className="hero-accent">Product Designer<br />Sênior</span> e Web Designer</h1>
          {/* <h1>
            <AnimatedText text="Sou " />
            <span className="hero-accent">
              <AnimatedText text="Product Designer" startIndex={4} />
            </span>
            <br />
            <em>
              <AnimatedText text="Sênior" startIndex={20} />
            </em>
            <AnimatedText text=" e Web Designer" startIndex={26} />
          </h1> */}
          <p className="hero-description">
            Criando soluções que unem UX estratégico, estética e desenvolvimento há mais de 15 anos.<br />Trabalhando com grandes empresas e líderes de tecnologia.
          </p>
          <a className="message-field">
            <span>Faz um designer pra mim.</span>
            <span className="round-arrow"><ArrowUpRight size={24} /></span>
          </a>
          <div className="hero-actions">
            <a className="pill-button" href="#projetos">Projetos e cases <Plus size={24} /></a>
            <a className="pill-button" href="#sobre">Carreira <Plus size={24} /></a>
          </div>
        </div>

        {/* <div className="hero-device" aria-label="Área para mockup de notebook">
          <div className="device-screen">
            <div className="device-reflection" />
            <div className="device-screen-label">Seu próximo projeto começa aqui.</div>
          </div>
          <div className="device-base"><span /></div>
        </div> */}

      </div>
    </section>
  )
}