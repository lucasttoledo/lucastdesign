import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const image = (
    <a className="project-visual" href={`mailto:oi@lucastdesign.com.br?subject=${encodeURIComponent(`Projeto: ${project.title}`)}`} aria-label={`Conversar sobre ${project.title}`}>
      <img src={project.image} alt={project.alt} loading="lazy" />
      <span className="visual-overlay" />
      <span className="visual-action"><ArrowUpRight size={24} /></span>
    </a>
  )

  const copy = (
    <div className="project-copy">
      <p className="eyebrow"><span />{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <a className="pill-button outline" href={`mailto:oi@lucastdesign.com.br?subject=${encodeURIComponent(`Projeto: ${project.title}`)}`}>
        Explorar projeto <ArrowUpRight size={24} />
      </a>
    </div>
  )

  return (
    <article className={`project-row ${project.layout === 'image-first' ? 'image-first' : ''}`}>
      {project.layout === 'image-first' ? <>{image}{copy}</> : <>{copy}{image}</>}
    </article>
  )
}