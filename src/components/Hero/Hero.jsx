import { useTypewriter } from '../../hooks/useTypewriter'
import ChatWidget from '../ChatWidget/ChatWidget'
import './Hero.css'

const TITLES = ['Mobile App Developer - Flutter', 'Python Backend Developer', 'Django Developer', 'Technical Mentor', 'Content Creator']

export default function Hero() {
  const title = useTypewriter(TITLES, 75, 2500)

  return (
    <section id="home" className="hero">
      <div className="hero__left">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available · Mentor / Flutter Developer roles
        </div>

        <div className="hero__greeting">Hi, I'm</div>
        <div className="hero__name">Shyamjith Haridas</div>

        <div className="hero__title">
          {title}
          <span className="hero__cursor" />
        </div>

        <p className="hero__desc">
          I’m a <strong>Flutter Developer and Python Backend Engineer</strong> focused on building clean, scalable, and reliable applications. Alongside development, I mentor aspiring developers, facilitate hands-on learning, and create technical content to share what I learn along the way.

        </p>

        <div className="hero__cta">
          <button className="btn btn--primary">
            View My Work →
          </button>
          <button className="btn btn--outline">
            Download CV
          </button>
        </div>
      </div>

      <div className="hero__right">
        <ChatWidget />
      </div>
    </section>
  )
}
