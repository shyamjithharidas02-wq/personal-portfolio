import './About.css'

const highlights = [
  { icon: '⚡', title: 'Mobile Engineering', desc: 'Building cross-platform mobile applications with Flutter, focusing on performance, usability, and maintainable architecture.' },
  { icon: '🔒', title: 'Backend Engineering', desc: 'Developing Python/Django backends and APIs with clean business logic, authentication, and scalable application design.' },
  { icon: '🏗️', title: 'Clean Architecture', desc: "Well-structured codebases with clear responsibilities, maintainable patterns, reusable components, and a focus on long-term scalability." },
  { icon: '🎯', title: 'Mentoring & Facilitation', desc: 'Helping aspiring developers understand complex concepts through hands-on projects, practical examples, and real-world development workflows.' },
  { icon: '🌱', title: 'Learning by Building', desc: 'Continuously expanding my skills across mobile, backend, architecture, and emerging technologies.' },
]

const educationInfo = {
  degree: 'BSc - Computer Science',
  school: 'Calicut University',
  period: 'Aug 2014 – Aug 2017',
}

// No real social URLs exist in the project data yet — placeholders match the
// rest of the site (Contact / Projects also use "#"). Swap in real URLs here.
const socials = [
  { label: 'GitHub', href: 'https://github.com/shyamjithharidas02-wq', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shyamjithharidas/', icon: LinkedinIcon },
]

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.57 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 3-.4c1.02 0 2.05.13 3 .4 2.29-1.53 3.3-1.21 3.3-1.21.66 1.65.24 2.87.12 3.17.77.83 1.24 1.88 1.24 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.83.57C20.56 21.88 24 17.49 24 12.29 24 5.78 18.63.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__grid">
        <div className="about__intro">
          <div className="section__tag">// about me</div>
          <h2 className="section__title">Behind the IDE</h2>

          <div className="about__text">
            <p>
              I build software, learn constantly, and share what I discover along the way.
            </p>
            <p>
              My work revolves around Flutter and Python, where I enjoy turning ideas into reliable applications and exploring how thoughtful architecture can make software easier to build, maintain, and scale.
            </p>
            <p>
             Outside of development, I work with aspiring developers as a <strong>mentor</strong> and <strong>facilitator</strong>, helping turn complex technical concepts into practical knowledge. I also create technical content to document what I learn and share it with others.
            </p>
            <p>
              For me, development has never been just about writing code. It's about building, learning, and sharing — understanding how things work, creating better solutions, and helping others grow along the way.
            </p>
          </div>
        </div>

        <div className="about__highlights">
          {highlights.map(h => (
            <div key={h.title} className="about__card">
              <span className="about__card-icon">{h.icon}</span>
              <div className="about__card-title">{h.title}</div>
              <div className="about__card-desc">{h.desc}</div>
            </div>
          ))}
        </div>

        <div className="about__meta">
          <div className="about__socials">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} className="about__social" href={href}>
                <Icon />
                {label}
              </a>
            ))}
          </div>

          <div className="about__education">
            <div className="section__tag">education</div>
            <div className="about__edu-degree">{educationInfo.degree}</div>
            <div className="about__edu-school">{educationInfo.school}</div>
            <div className="about__edu-date">{educationInfo.period}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
