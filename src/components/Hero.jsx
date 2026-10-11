import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react'

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
  return (
    <section className="hero" id="inicio">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Olá, me chamo Lucas
          </p>
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
            Criando soluções que unem UX estratégico, estética e desenvolvimento há mais de 15 anos. Trabalhando com grandes empresas e líderes de tecnologia.
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