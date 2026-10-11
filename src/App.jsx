import { ArrowRight, Sparkles } from 'lucide-react'
import { FaBehance, FaLinkedinIn, FaMedium } from 'react-icons/fa6'
import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import PillarCard from './components/PillarCard'
import { metrics, pillars, projects } from './data'

function ProjectsSection() {
  return (
    <section className="projects-section section-shell" id="projetos">

      <div className="projects-list">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>

      <div className="project-thumbnails" aria-label="Mais projetos">
        {projects.map((project) => (
          <a href={`mailto:oi@lucastdesign.com.br?subject=${encodeURIComponent(project.title)}`} key={`${project.id}-thumb`} className="thumbnail-card">
            <img src={project.image} alt={project.alt} loading="lazy" />
            <span>{project.title}</span>
            <ArrowRight size={24} />
          </a>
        ))}
      </div>

      <a className="outline-button" href="mailto:oi@lucastdesign.com.br?subject=Mais%20projetos">
        Tem mais projeto legal, clicando aqui <ArrowRight size={24} />
      </a>
    </section>
  )
}

function PillarsSection() {
  return (
    <section className="pillars-section" id="pilares">
      <div className="section-shell pillars-inner">
        <div className="pillars-heading">
          <h2>Pilares de Atuação</h2>
          <p>Especialidades integradas para guiar seu produto digital do rascunho ao lançamento de mercado.</p>
        </div>
        <div className="pillars-grid">
          {pillars.map((pillar) => <PillarCard key={pillar.number} pillar={pillar} />)}
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['PRODUCT DESIGN', 'ESTRATÉGIA', 'UX / UI DESIGN', 'DESIGN SYSTEMS', 'FIGMA', 'FRONT-END', 'DESIGN DE INTERAÇÃO', 'DESIGN DE EXPERIÊNCIA', 'DESIGN DE SERVIÇOS', 'PROTOTIPAGEM', 'DESIGN DE PRODUTO', 'DESIGN DE INTERFACE', 'ADOBE PHOTOSHOP', 'DESIGN DE SOFTWARE', 'WORDPRESS']
  return (
    <div className="marquee" role="region" aria-label="Especialidades">
      <div className="marquee-track">
        {[false, true].map((isClone) => (
          <div className={`marquee-group${isClone ? ' is-clone' : ''}`} aria-hidden={isClone || undefined} key={String(isClone)}>
            {items.map((item) => <span key={item}><Sparkles size={22} fill="currentColor" />{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <section className="about-section" id="sobre">
      <div className="quote-wrap">
        <h2><em>“O design bom simplifica.</em> O design<br className="desktop-break" /> excepcional torna-se invisível.”</h2>
        <p className="quote-caption">
          Dom Normam sempre disse para removermos o ruído visual e as decorações desnecessárias para dar espaço à conversão pura e ao valor do produto.
        </p>
      </div>
      <div className="metrics-grid section-shell">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
      <div className="about-me">
        <figure className="about-me-portrait">
          <img className="about-me-photo" src="../dist/assets/Fotos_Familia.gif" alt="Lucas Toledo, Product Designer" loading="lazy" />
        </figure>
        <div className="about-me-copy">
          <p>Sou formado pelo Instituto de Ensino Superior de Bauru e, ao longo da minha trajetória, transformo dados e ideias em interfaces que colocam a experiência do usuário no centro.</p>
          <p>Comecei minha carreira no Jornal da Cidade e depois atuei em grandes empresas. Nesse percurso, aprofundei minha prática em prototipagem, testes de usabilidade, pesquisa com usuários e layouts responsivos. Também utilizo o Figma para criar soluções claras e funcionais.</p>
          <p>Valorizo a colaboração e a comunicação. Trabalho com diferentes perfis de equipe e clientes para alinhar as decisões de design aos objetivos de cada projeto.</p>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="wordmark" href="#inicio">LUCAS<span>T</span>DESIGN</a>
      <p>Lucas Toledo. Todos os direitos reservados.</p>
      <nav className="footer-socials" aria-label="Redes sociais">
        <a href="http://linkedin.com/in/lucastdesign" aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <FaLinkedinIn aria-hidden="true" />
        </a>
        <a href="https://lucastdesign.medium.com/" aria-label="Medium" target="_blank" rel="noreferrer">
          <FaMedium aria-hidden="true" />
        </a>
        <a href="https://www.behance.net/lucasttoledo" aria-label="Behance" target="_blank" rel="noreferrer">
          <FaBehance aria-hidden="true" />
        </a>
      </nav>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProjectsSection />
        <PillarsSection />
        <Marquee />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  )
}