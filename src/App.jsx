import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import PillarCard from './components/PillarCard'
import ProjectDetail from './components/ProjectDetail'
import { metrics, pillars, projects } from './data'

const mediumFeedUrl = '/api/medium-feed.xml'

function ProjectsSection() {
  const rowProjects = projects.filter((project) => project.presentation === 'row')
  const thumbnailProjects = projects.filter((project) => project.presentation === 'thumbnail')

  return (
    <section className="projects-section section-shell" id="projetos">

      <div className="projects-list">
        {rowProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>

      <div className="project-thumbnails" aria-label="Mais projetos">
        {thumbnailProjects.map((project) => (
          <a href={`/projetos/${project.slug || project.id}`} key={`${project.id}-thumb`} className="thumbnail-card">
            <img src={project.image} alt={project.alt} loading="lazy" />
            <span>{project.title}</span>
            <ArrowRight size={24} />
          </a>
        ))}
      </div>

      <a className="pill-button outline-button" href="https://www.behance.net/lucasttoledo" target="_blank">
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
        <h2>
          <em>“O design bom simplifica.</em> O design<br className="desktop-break" /> excepcional torna-se invisível.”
        </h2>
        <p className="quote-caption">
          Don Norman sempre disse para removermos o ruído visual e as decorações desnecessárias para dar espaço à conversão pura e ao valor do produto.
        </p>
      </div>
      <div className="metrics-band">
        <div className="metrics-grid section-shell">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="about-me">
        <figure className="about-me-portrait">
          <img className="about-me-photo" src="/assets/Foto_Familia.png" alt="Lucas com sua família" loading="lazy" />
          <img className="about-me-avatar" src="/assets/Lucas.png" alt="Retrato de Lucas Toledo" loading="lazy" />
        </figure>
        <div className="about-me-copy">
          <h2>Quem sou eu</h2>
          <p>Sou formado pelo Instituto de Ensino Superior de Bauru e, ao longo da minha trajetória, transformo dados e ideias em interfaces que colocam a experiência do usuário no centro.</p>
          <p>Comecei minha carreira no Jornal da Cidade e depois atuei em grandes empresas. Nesse percurso, aprofundei minha prática em prototipagem, testes de usabilidade, pesquisa com usuários e layouts responsivos. Também utilizo o Figma para criar soluções claras e funcionais.</p>
          <p>Valorizo a colaboração e a comunicação. Trabalho com diferentes perfis de equipe e clientes para alinhar as decisões de design aos objetivos de cada projeto.</p>
        </div>
      </div>
    </section>
  )
}

function MediumSection() {
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    async function loadPosts() {
      try {
        const response = await fetch(mediumFeedUrl, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`O feed do Medium respondeu com status ${response.status}.`)
        }

        const feed = new DOMParser().parseFromString(await response.text(), 'application/xml')
        if (feed.getElementsByTagName('parsererror').length > 0) {
          throw new Error('O feed do Medium retornou um XML inválido.')
        }

        const latestPosts = Array.from(feed.getElementsByTagName('item'))
          .slice(0, 4)
          .map((item) => {
            const content = item.getElementsByTagName('content:encoded')[0]?.textContent
              || item.getElementsByTagName('description')[0]?.textContent
              || ''
            const article = new DOMParser().parseFromString(content, 'text/html')
            const description = article.body.textContent.replace(/\s+/g, ' ').trim()

            return {
              title: item.getElementsByTagName('title')[0]?.textContent?.trim(),
              url: item.getElementsByTagName('link')[0]?.textContent?.trim(),
              image: article.querySelector('img')?.getAttribute('src'),
              description: description.length > 180
                ? `${description.slice(0, 177).trimEnd()}...`
                : description,
            }
          })
          .filter((post) => post.title && post.url)

        setPosts(latestPosts)
        setStatus('success')
      } catch (error) {
        if (error.name === 'AbortError') return
        console.error('Não foi possível carregar os artigos do Medium.', error)
        setStatus('error')
      }
    }

    loadPosts()
    return () => controller.abort()
  }, [])

  return (
    <section className="medium-section" id="medium">
      <div className="section-shell medium-inner">
        <div className="pillars-heading">
          <h2>Minhas reflexões no Medium</h2>
          <p>Lá falo sobre a minha visão de design, tecnologia e o futuro da profissão. Também compartilho minhas experiências profissionais e pessoais</p>
        </div>

        {status === 'loading' && (
          <p className="medium-message" role="status">Carregando os artigos mais recentes...</p>
        )}
        {status === 'error' && (
          <p className="medium-message" role="status">
            Não foi possível carregar os artigos agora. Você pode ler todos no{' '}
            <a href="https://lucastdesign.medium.com/" target="_blank" rel="noreferrer">Medium</a>.
          </p>
        )}
        {status === 'success' && posts.length === 0 && (
          <p className="medium-message" role="status">Nenhum artigo foi encontrado no feed do Medium.</p>
        )}
        {status === 'success' && posts.length > 0 && (
          <div className="medium-grid">
            {posts.map((post) => (
              <a
                className="medium-card pillar-card"
                href={post.url}
                key={post.url}
                target="_blank"
                rel="noreferrer"
              >
                {post.image && <img className="medium-card-image" src={post.image} alt="" loading="lazy" />}
                <div className="medium-card-content">
                  <div className="medium-card-top">
                    {/* <span className="pillar-number">Medium</span>
                    <ArrowRight size={22} aria-hidden="true" /> */}
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              </a>
            ))}
          </div>
        )}

        <a className="pill-button medium-all-link" href="https://lucastdesign.medium.com/" target="_blank" rel="noreferrer">
          Ver todos os artigos <ArrowRight size={20} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

function ContactSection() {
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const details = formData.get('details')
    const body = `Nome: ${name}\nE-mail: ${email}\n\nDetalhes do projeto:\n${details}`

    window.location.href = `mailto:oi@lucastdesign.com.br?subject=${encodeURIComponent('Contato pelo site Lucas T Design')}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="contact-section" id="contato">
      <div className="section-shell contact-inner">
        <div className="contact-copy">
          <h2>Vamos construir o seu próximo produto.</h2>
          <p>
            Tem uma ideia ou quer melhorar a experiência do seu produto digital? Me conte um pouco sobre o seu projeto. Vou responder o mais rápido possível.
          </p>
          <a className="contact-email" href="mailto:lucastdesign@gmail.com">
            <Mail size={22} aria-hidden="true" />
            lucastdesign@gmail.com
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="contact-form-heading"><span aria-hidden="true" />Preencha o formulário</p>
          <label htmlFor="contact-name">Seu nome</label>
          <input id="contact-name" name="name" type="text" placeholder="Como posso te chamar?" autoComplete="name" required />

          <label htmlFor="contact-email">Seu e-mail</label>
          <input id="contact-email" name="email" type="email" placeholder="voce@empresa.com" autoComplete="email" required />

          <label htmlFor="contact-details">Detalhes do projeto</label>
          <textarea id="contact-details" name="details" placeholder="Conte um pouco sobre sua ideia ou os objetivos do projeto..." rows="3" required />

          <button className="pill-button contact-submit" type="submit">
            Enviar mensagem <ArrowRight size={22} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default function App() {
  const projectMatch = window.location.pathname.match(/^\/projetos\/([^/]+)\/?$/)

  if (projectMatch) {
    const project = projects.find(({ id, slug }) => id === projectMatch[1] || slug === projectMatch[1])
    return project
      ? <ProjectDetail project={project} />
      : (
        <>
          <SiteHeader projectPage />
          <main className="project-not-found section-shell">
            <p className="eyebrow"><span />Projeto não encontrado</p>
            <h1>Esse projeto não está disponível.</h1>
            <a className="pill-button outline" href="/#projetos"><ArrowRight size={20} /> Voltar para os projetos</a>
          </main>
          <SiteFooter />
        </>
      )
  }

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProjectsSection />
        <PillarsSection />
        <Marquee />
        <AboutSection />
        <MediumSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}