import { ArrowUpRight, Plus, ThumbsDown, ThumbsUp, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

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
  const closeButtonRef = useRef(null)
  const [isDesignerModalOpen, setIsDesignerModalOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [reaction, setReaction] = useState(null)
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  useEffect(() => {
    if (!isDesignerModalOpen) return undefined

    const generationDuration = 5000
    const startedAt = Date.now()
    const previousFocus = document.activeElement

    document.body.classList.add('designer-modal-open')
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsDesignerModalOpen(false)
    }

    const intervalId = window.setInterval(() => {
      const nextProgress = Math.min(
        Math.floor(((Date.now() - startedAt) / generationDuration) * 100),
        100,
      )
      setProgress(nextProgress)

      if (nextProgress === 100) {
        setIsGenerating(false)
        window.clearInterval(intervalId)
      }
    }, 50)

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.clearInterval(intervalId)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('designer-modal-open')
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [isDesignerModalOpen])

  const openDesignerModal = () => {
    setProgress(0)
    setIsGenerating(true)
    setIsDesignerModalOpen(true)
  }

  const handleReaction = (nextReaction) => {
    if (reaction === nextReaction) {
      if (nextReaction === 'like') setLikes((count) => count - 1)
      else setDislikes((count) => count - 1)
      setReaction(null)
      return
    }

    if (reaction === 'like') setLikes((count) => count - 1)
    if (reaction === 'dislike') setDislikes((count) => count - 1)
    if (nextReaction === 'like') setLikes((count) => count + 1)
    else setDislikes((count) => count + 1)
    setReaction(nextReaction)
  }

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
    <>
      <section className="hero" id="inicio" ref={heroRef}>

      {/* <video
        className="hero-video"
        src="/assets/laptop_lucastdesign_home_03.webm"
        autoPlay
        muted
        playsInline
        aria-hidden="true"
      /> */}

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
          {/* <h1>Sou <span className="hero-accent">Product Designer<br />Sênior</span> e Web Designer</h1> */}
          <h1>
            <AnimatedText text="Sou " />
            <span className="hero-accent">
              <AnimatedText text="Product Designer" startIndex={4} />
            </span>
            <br />
            <em>
              <AnimatedText text="Sênior" startIndex={20} />
            </em>
            <AnimatedText text=" e Web Designer" startIndex={26} />
          </h1>
          <p className="hero-description">
            Criando soluções que unem UX estratégico, estética e desenvolvimento há mais de 15 anos.<br />Trabalhando com grandes empresas e líderes de tecnologia.
          </p>
          {/* <button
            className="message-field"
            type="button"
            onClick={openDesignerModal}
          >
            <span>Faz um designer pra mim.</span>
            <span className="round-arrow"><ArrowUpRight size={24} aria-hidden="true" /></span>
          </button> */}
          <div className="hero-actions">
            <a className="pill-button" href="#projetos">Projetos e cases <Plus size={24} /></a>
            <a className="pill-button" href="#sobre">Carreira <Plus size={24} /></a>
          </div>
        </div>

      </div>
      </section>
      {isDesignerModalOpen && createPortal(
        <div
          className="designer-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsDesignerModalOpen(false)
          }}
        >
          <section
            className="designer-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="designer-modal-title"
            aria-describedby="designer-modal-description"
          >
            <button
              className="designer-modal-close"
              type="button"
              onClick={() => setIsDesignerModalOpen(false)}
              ref={closeButtonRef}
              aria-label="Fechar"
            >
              <X size={22} aria-hidden="true" />
            </button>
            <p className="eyebrow"><span />Laboratório de designers</p>
            <h2 id="designer-modal-title">
              {isGenerating ? 'Gerando...' : 'Seu designer está pronto!'}
            </h2>
            {isGenerating ? (
              <div className="designer-generation" aria-live="polite">
                <div
                  className="designer-progress-track"
                  role="progressbar"
                  aria-label="Geração do designer"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                >
                  <span style={{ width: `${progress}%` }} />
                </div>
                <p id="designer-modal-description">
                  Aguarde, estamos gerando seu designer: <strong>{progress}%</strong>
                </p>
              </div>
            ) : (
              <div className="designer-result">
                <img
                  className="designer-result-image"
                  src="/assets/lucas_ia.jpg"
                  alt="Lucas vestido como um super-herói"
                />
                <p id="designer-modal-description">
                  Tudo certo! Aproveitei para vesti-lo com a roupa do seu super-herói favorito. O Pantegra Negra, após uma batalha épica.
                </p>
                <div className="designer-reactions" aria-label="Avalie o resultado">
                  <button
                    className={reaction === 'like' ? 'is-selected' : ''}
                    type="button"
                    onClick={() => handleReaction('like')}
                    aria-label={`Gostei, ${likes} curtidas`}
                    aria-pressed={reaction === 'like'}
                  >
                    <ThumbsUp size={19} aria-hidden="true" />
                    <span>{likes}</span>
                  </button>
                  <button
                    className={reaction === 'dislike' ? 'is-selected' : ''}
                    type="button"
                    onClick={() => handleReaction('dislike')}
                    aria-label={`Não gostei, ${dislikes} avaliações negativas`}
                    aria-pressed={reaction === 'dislike'}
                  >
                    <ThumbsDown size={19} aria-hidden="true" />
                    <span>{dislikes}</span>
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>,
        document.body,
      )}
    </>
  )
}