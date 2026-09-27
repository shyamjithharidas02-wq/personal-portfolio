import './Contact.css'

const links = [
  { icon: '✉️', label: 'shyamjith.haridas02@email.com', href: 'mailto:shyamjith.haridas02@email.com' },
  { icon: '💼', label: 'linkedin.com/in/shyamjithharidas', href: 'https://www.linkedin.com/in/shyamjithharidas/' },
  { icon: '🐙', label: 'github.com/shyamjithharidas', href: 'https://github.com/shyamjithharidas02-wq' },
  // { icon: '🐦', label: '@jithinvijayan', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section__tag">// contact</div>
      <h2 className="section__title">Let's work together</h2>

      <div className="contact__grid">
        <div className="contact__left">
          <p>
            I'm currently open to Lead / Senior Engineer roles and interesting freelance projects.
            If you have something in mind, I'd love to hear about it.
          </p>
          <div className="contact__links">
            {links.map(l => (
              <a key={l.label} className="contact__link" href={l.href}>
                <div className="contact__link-icon">{l.icon}</div>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <form className="contact__form" onSubmit={e => e.preventDefault()}>
          <div className="contact__field">
            <label className="contact__label">NAME</label>
            <input className="contact__input" placeholder="Your name" />
          </div>
          <div className="contact__field">
            <label className="contact__label">EMAIL</label>
            <input className="contact__input" type="email" placeholder="your@email.com" />
          </div>
          <div className="contact__field">
            <label className="contact__label">MESSAGE</label>
            <textarea className="contact__textarea" placeholder="What's on your mind?" />
          </div>
          <button className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
            Send Message →
          </button>
        </form>
      </div>
    </section>
  )
}
