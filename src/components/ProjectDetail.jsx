import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import { projects } from '../data'

function ThemeComparison({ comparison }) {
  const [position, setPosition] = useState(50)

  return (
    <section className="theme-comparison" aria-labelledby="theme-comparison-title">
      <div className="case-gallery-heading">
        <div>
          <p className="eyebrow"><span />Aparência</p>
          <h2 id="theme-comparison-title">Temas light e dark</h2>
        </div>
        <p>Arraste o controle para comparar os temas.</p>
      </div>
      <div
        className="theme-comparison-view"
        style={{ '--comparison-position': `${position}%` }}
      >
        <img
          className="theme-comparison-image"
          src={comparison.light.image}
          alt={comparison.light.alt}
        />
        <div className="theme-comparison-overlay">
          <img
            className="theme-comparison-image"
            src={comparison.dark.image}
            alt={comparison.dark.alt}
          />
        </div>
        <span className="theme-comparison-label is-light">Light</span>
        <span className="theme-comparison-label is-dark">Dark</span>
        <div className="theme-comparison-divider" aria-hidden="true">
          <span />
        </div>
        <input
          className="theme-comparison-slider"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Comparar os temas light e dark"
          aria-valuetext={`${position}% do tema dark`}
        />
      </div>
    </section>
  )
}

export default function ProjectDetail({ project }) {
  const [activeImage, setActiveImage] = useState(null)
  const caseStudy = project.caseStudy
  const galleryGroups = caseStudy.galleryGroups
  const gallery = useMemo(
    () => caseStudy.gallery
      || galleryGroups?.flatMap(({ images }) => images)
      || caseStudy.sections.flatMap(({ images = [] }) => images),
    [caseStudy],
  )
  const stageImages = useMemo(
    () => caseStudy.sections?.flatMap(({ stageImage }) => (
      stageImage
        ? [{ image: stageImage.src, alt: stageImage.alt, caption: stageImage.alt }]
        : []
    )) || [],
    [caseStudy],
  )
  const lightboxImages = useMemo(() => [...gallery, ...stageImages], [gallery, stageImages])
  const openingSection = caseStudy.sections?.[0]
  const storySections = caseStudy.sections?.slice(1) || []
  const projectIndex = projects.findIndex(({ id }) => id === project.id)
  const nextProject = projects[(projectIndex + 1) % projects.length]

  useEffect(() => {
    if (activeImage === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImage(null)
      if (event.key === 'ArrowRight') {
        setActiveImage((current) => (current + 1) % lightboxImages.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveImage((current) => (current - 1 + lightboxImages.length) % lightboxImages.length)
      }
    }

    document.body.classList.add('lightbox-open')
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImage, lightboxImages.length])

  const currentImage = activeImage === null ? null : lightboxImages[activeImage]

  return (
    <>
      <SiteHeader projectPage />
      <main className="project-detail">
        <div className="project-detail-shell">
          <nav className="project-breadcrumb" aria-label="Breadcrumb">
            <a className="project-back-link" href="/#projetos">
              <ArrowLeft size={18} aria-hidden="true" />
              Voltar para a home
            </a>
            <span aria-hidden="true">/</span>
            <a href="/#projetos">Projetos</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>

          <header className={`project-detail-heading${project.headerImage ? ' has-detail-image' : ''}`}>
            <div className="project-detail-copy">
              <p className="eyebrow"><span />{project.eyebrow}</p>
              <h1>{project.title}</h1>
              <p className="project-detail-lead">{project.description}</p>
              <dl className="project-meta">
                <div><dt>Projeto</dt><dd>{caseStudy.client}</dd></div>
                <div><dt>Ano</dt><dd>{caseStudy.year}</dd></div>
                <div><dt>Atuação</dt><dd>{caseStudy.role}</dd></div>
              </dl>
            </div>
          </header>

          {caseStudy.sections ? (
            <div className="case-content">
              <section className="case-intro" aria-labelledby="case-overview-title">
                <div className="case-overview-copy">
                  <p className="eyebrow"><span />Visão geral</p>
                  <h2 id="case-overview-title">{openingSection.title}</h2>
                  <div className="case-intro-copy">
                    {openingSection.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {openingSection.quote && <p>{openingSection.quote}</p>}
                  </div>
                </div>
                {/* <figure className="project-cover">
                  <img src={project.image} alt={project.alt} />
                  <figcaption>{caseStudy.client} · {caseStudy.year}</figcaption>
                </figure> */}
              </section>

              {storySections.length > 0 && (
                <section className="case-timeline" aria-label="Etapas do projeto">
                  {storySections.map((section, sectionIndex) => (
                    <article className={section.stageImage ? 'has-image' : undefined} key={section.title}>
                      <div className="case-timeline-copy">
                        <span className="case-step">Etapa {String(sectionIndex + 1).padStart(2, '0')}</span>
                        <h2>{section.title}</h2>
                        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        {section.list && (
                          <ul className="case-content-list">
                            {section.list.map((item) => (
                              <li key={`${item.title || ''}${item.text}`}>
                                {item.title && <strong>{item.title}</strong>}
                                {item.text}
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.quote && (
                          <blockquote className="case-content-quote">
                            <p>{section.quote}</p>
                          </blockquote>
                        )}
                      </div>
                      {section.stageImage && (
                        <button
                          className="case-timeline-image"
                          type="button"
                          onClick={() => {
                            const stageImageOffset = storySections
                              .slice(0, sectionIndex)
                              .filter(({ stageImage }) => stageImage).length
                            setActiveImage(gallery.length + stageImageOffset)
                          }}
                          aria-label={`Ampliar imagem: ${section.stageImage.alt}`}
                        >
                          <img src={section.stageImage.src} alt={section.stageImage.alt} loading="lazy" />
                          <span className="case-gallery-zoom"><Expand size={20} aria-hidden="true" /> Ampliar</span>
                        </button>
                      )}
                    </article>
                  ))}
                </section>
              )}

              <blockquote className="case-quote">
                <span aria-hidden="true">“</span>
                <p>{caseStudy.quote}</p>
                <cite>Princípio que guiou o projeto</cite>
              </blockquote>

              <section className="case-result">
                <div>
                  <p className="eyebrow"><span />O resultado</p>
                  <h2>{caseStudy.resultHeading || 'Uma experiência pronta para evoluir.'}</h2>
                </div>
                <p>{caseStudy.result}</p>
              </section>

              {caseStudy.themeComparison && (
                <ThemeComparison comparison={caseStudy.themeComparison} />
              )}

              <section className="case-gallery" aria-labelledby="case-gallery-title">
                <div className="case-gallery-heading">
                  <div>
                    <p className="eyebrow"><span />Detalhes do projeto</p>
                    <h2 id="case-gallery-title">Uma visão mais de perto.</h2>
                  </div>
                  <p>Selecione uma imagem para ampliar.</p>
                </div>
                {galleryGroups ? (
                  <div className="case-gallery-groups">
                    {galleryGroups.map((group, groupIndex) => {
                      const groupOffset = galleryGroups
                        .slice(0, groupIndex)
                        .reduce((total, previousGroup) => total + previousGroup.images.length, 0)

                      return (
                        <div className="case-gallery-group" key={group.type}>
                          <h3>{group.title}</h3>
                          <div className={`case-gallery-grid is-${group.type}`}>
                            {group.images.map((image, imageIndex) => {
                              const galleryIndex = groupOffset + imageIndex

                              return (
                                <button
                                  className="case-gallery-item"
                                  type="button"
                                  key={image.image}
                                  onClick={() => setActiveImage(galleryIndex)}
                                  aria-label={`Ampliar imagem ${galleryIndex + 1}: ${image.alt}`}
                                >
                                  <img src={image.image} alt={image.alt} loading="lazy" />
                                  <span className="case-gallery-zoom"><Expand size={20} aria-hidden="true" /> Ampliar</span>
                                  <span className="case-gallery-caption">{image.caption}</span>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="case-gallery-grid">
                    {gallery.map((image, index) => (
                      <button
                        className="case-gallery-item"
                        type="button"
                        key={`${image.image}-${index}`}
                        onClick={() => setActiveImage(index)}
                        aria-label={`Ampliar imagem ${index + 1}: ${image.alt}`}
                      >
                        <img src={image.image} alt={image.alt} loading="lazy" />
                        <span className="case-gallery-zoom"><Expand size={20} aria-hidden="true" /> Ampliar</span>
                        <span className="case-gallery-caption">{image.caption}</span>
                      </button>
                    ))}
                  </div>
                )}
              </section>
              <p className="case-thanks">Obrigado!</p>
            </div>
          ) : (
            <>
              <section className="case-intro" aria-labelledby="case-overview-title">
                <div className="case-overview-copy">
                  <p className="eyebrow"><span />Visão geral</p>
                  <h2 id="case-overview-title">Design que conecta contexto e ação.</h2>
                  <div className="case-intro-copy">
                    <p>{caseStudy.overview}</p>
                  </div>
                </div>
              </section>

              <section className="case-timeline" aria-label="Processo do projeto">
                <article>
                  <span className="case-step">01 — O desafio</span>
                  <h2>Entender antes de simplificar.</h2>
                  <p>{caseStudy.challenge}</p>
                </article>
                <article>
                  <span className="case-step">02 — A abordagem</span>
                  <h2>Transformar complexidade em clareza.</h2>
                  <p>{caseStudy.approach}</p>
                </article>
              </section>

              <blockquote className="case-quote">
                <span aria-hidden="true">“</span>
                <p>{caseStudy.quote}</p>
                <cite>Princípio que guiou o projeto</cite>
              </blockquote>

              <section className="case-result">
                <div>
                  <p className="eyebrow"><span />O resultado</p>
                  <h2>{caseStudy.resultHeading || 'Uma experiência pronta para evoluir.'}</h2>
                </div>
                <p>{caseStudy.result}</p>
              </section>

              <section className="case-gallery" aria-labelledby="case-gallery-title">
                <div className="case-gallery-heading">
                  <div>
                    <p className="eyebrow"><span />Detalhes do projeto</p>
                    <h2 id="case-gallery-title">Uma visão mais de perto.</h2>
                  </div>
                  <p>Selecione uma imagem para ampliar.</p>
                </div>
                <div className="case-gallery-grid">
                  {gallery.map((image, index) => (
                    <button
                      className="case-gallery-item"
                      type="button"
                      key={`${image.image}-${index}`}
                      onClick={() => setActiveImage(index)}
                      aria-label={`Ampliar imagem ${index + 1}: ${image.alt}`}
                    >
                      <img src={image.image} alt={image.alt} loading="lazy" />
                      <span className="case-gallery-zoom"><Expand size={20} aria-hidden="true" /> Ampliar</span>
                      <span className="case-gallery-caption">{image.caption}</span>
                    </button>
                  ))}
                </div>
                {caseStudy.sourceUrl && (
                  <a className="case-source-link" href={caseStudy.sourceUrl} target="_blank" rel="noreferrer">
                    Ver imagem de referência no Behance <ArrowRight size={18} aria-hidden="true" />
                  </a>
                )}
              </section>
            </>
          )}

          <nav className="project-next" aria-label="Navegação de projetos">
            <a href="/#projetos"><ArrowLeft size={18} aria-hidden="true" /> Todos os projetos</a>
            <a className="project-next-card" href={`/projetos/${nextProject.slug || nextProject.id}`}>
              <span>Próximo projeto</span>
              <strong>{nextProject.title}</strong>
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </nav>
        </div>

        {project.headerImage && (
          <img
            className="project-detail-hero-image"
            src={project.headerImage.src}
            alt={project.headerImage.alt}
          />
        )}

      </main>
      <SiteFooter />

      {currentImage && (
        <div
          className="case-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${currentImage.alt}`}
          onClick={() => setActiveImage(null)}
        >
          <button className="lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Fechar imagem">
            <X size={26} aria-hidden="true" />
          </button>
          <button
            className="lightbox-nav lightbox-previous"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActiveImage((activeImage - 1 + lightboxImages.length) % lightboxImages.length)
            }}
            aria-label="Imagem anterior"
          >
            <ArrowLeft size={24} aria-hidden="true" />
          </button>
          <figure className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={currentImage.image} alt={currentImage.alt} />
            <figcaption>{currentImage.caption}</figcaption>
          </figure>
          <button
            className="lightbox-nav lightbox-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActiveImage((activeImage + 1) % lightboxImages.length)
            }}
            aria-label="Próxima imagem"
          >
            <ArrowRight size={24} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  )
}
