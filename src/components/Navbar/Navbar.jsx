import { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { navLinks } from '../../data/portfolioData'
import './Navbar.css'

export default function Navbar() {
  const { isDark, toggle } = useTheme()
  const [active, setActive] = useState('HOME')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (link) => {
    setActive(link.label)
    const el = document.getElementById(link.href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none' }}>
      <div className="navbar__inner">
        <a className="navbar__logo" href="#">
          <div className="navbar__logo-box">SH</div>
          <span className="navbar__logo-text">shyam<span>.</span></span>
        </a>

        <ul className="navbar__links">
          {navLinks.map(link => (
            <li
              key={link.label}
              className={`navbar__link${active === link.label ? ' navbar__link--active' : ''}`}
              onClick={() => handleNavClick(link)}
            >
              {link.label}
              {link.badge && <span className="navbar__badge">{link.badge}</span>}
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <span className="navbar__status">
            <span className="navbar__status-dot" />
            open_to_work
          </span>
          <button className="navbar__theme-btn" onClick={toggle} aria-label="Toggle theme">
            {isDark ? '☀️' : '🌙'}
          </button>
          <button className="navbar__hire-btn">Hire Me</button>
        </div>
      </div>
    </nav>
  )
}
