import { ArrowUpRight } from 'lucide-react'

export default function PillarCard({ pillar }) {
  return (
    <article className="pillar-card">
      <div className="pillar-top">
        <span className="pillar-number">{pillar.number}</span>
        <ArrowUpRight size={24} strokeWidth={1.8} />
      </div>
      <h3>{pillar.title}</h3>
      <p>{pillar.description}</p>
    </article>
  )
}