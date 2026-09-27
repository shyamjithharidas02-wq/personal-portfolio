import { projects } from '../../data/portfolioData'
import './Projects.css'

function ArrowIcon() {
  return (
    <svg className="projects__link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <div className="section__tag">// projects</div>
        <h2 className="section__title">Things I've built</h2>

        <div className="projects__grid">
          {projects.map(p => (
            <div key={p.title} className="projects__card">
              <div className="projects__card-header">
                <div className="projects__card-title">{p.title}</div>
                <ArrowIcon />
              </div>
              <p className="projects__card-desc">{p.description}</p>
              <div className="projects__tags">
                {p.tags.map(t => (
                  <span key={t} className="projects__tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
