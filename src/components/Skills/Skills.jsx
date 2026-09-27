import { skills } from '../../data/portfolioData'
import './Skills.css'

const icons = { Frontend: '🖥️', Backend: '⚙️', DevOps: '🚀', Tools: '🔧' }

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <div className="section__tag">// skills</div>
        <h2 className="section__title">Under the Hood</h2>

        <div className="skills__grid">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="skills__category">
              <div className="skills__cat-title">
                {icons[cat]} {cat}
              </div>
              <div className="skills__tags">
                {items.map(skill => (
                  <span key={skill} className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
