import { stats } from '../../data/portfolioData'
import './Stats.css'

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="stats__item"
          style={{ animationDelay: `${0.4 + i * 0.1}s` }}
        >
          <div className="stats__value">{s.value}</div>
          <div className="stats__label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
