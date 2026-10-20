import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const projectUrl = `/projetos/${project.slug || project.id}`
  const image = (
    <a className="project-visual" href={projectUrl} aria-label={`Explorar projeto: ${project.title}`}>
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
      <a className="pill-button outline" href={projectUrl}>
        Explorar projeto <ArrowUpRight size={24} />
      </a>
    </div>
  )

  return (
    <article className={`project-row ${project.layout === 'image-first' ? 'image-first' : ''}`}>
      {project.layout === 'image-first' ? <>{copy}{image}</> : <>{image}{copy}</>}
    </article>
  )
}