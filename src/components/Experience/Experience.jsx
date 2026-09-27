import { experiences } from '../../data/portfolioData'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section__tag">// experience</div>
      <h2 className="section__title">Where I've worked</h2>

      <div className="experience__timeline">
        {experiences.map((exp) => (
          <div key={exp.company} className="experience__item">
            <div className="experience__period">{exp.period}</div>
            <div className="experience__role">{exp.role}</div>
            <div className="experience__company">@ {exp.company}</div>
            <p className="experience__desc">{exp.description}</p>
            <div className="experience__tags">
              {exp.tags.map(t => (
                <span key={t} className="experience__tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
