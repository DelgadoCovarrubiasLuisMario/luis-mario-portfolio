import type { ReactNode } from 'react';
import { ExternalLink, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from './data/profile';
import { projects } from './data/projects';

const navItems = [
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Cta({
  href,
  children,
  variant = 'solid',
}: {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'ghost' | 'accent';
}) {
  const className =
    variant === 'accent' ? 'cta cta-accent' : variant === 'ghost' ? 'cta cta-ghost' : 'cta';

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={className}
    >
      {children}
    </a>
  );
}

function App() {
  return (
    <main className="min-h-screen text-[var(--ink)]">
      <header className="site-shell flex items-center justify-between gap-4 py-5 sm:py-7">
        <a href="#top" className="font-mono text-xs font-medium uppercase tracking-[0.22em]">
          {profile.shortName}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] sm:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[var(--ink)]">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${profile.email}`} className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent-ink)]">
          Email
        </a>
      </header>

      <hr className="rule site-shell" />

      <section id="top" className="site-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            {profile.location} · Software Engineer
          </p>
          <h1 className="font-display mt-5 text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.92] tracking-[-0.02em]">
            {profile.name}
          </h1>
        </div>

        <div className="reveal reveal-delay-1 flex flex-col justify-end">
          <p className="font-display text-2xl italic leading-snug text-[var(--accent-ink)] sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-8">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href="#projects" variant="accent">
              View selected work
            </Cta>
            <Cta href={profile.cv} variant="ghost">
              <FileText size={15} /> CV
            </Cta>
            <Cta href={profile.github} variant="ghost">
              <Github size={15} /> GitHub
            </Cta>
          </div>
        </div>
      </section>

      <section id="stack" className="site-shell border-t border-[var(--rule)] py-12 sm:py-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">01 — Stack</p>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl">Tools I reach for when I ship</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
            Frontend systems, Node APIs, SQL models, auth boundaries and delivery workflows I use in real client and product work.
          </p>
        </div>

        <div className="grid gap-0 border-t border-[var(--rule)] md:grid-cols-2">
          {profile.stackGroups.map((group, index) => (
            <article
              key={group.title}
              className={`border-b border-[var(--rule)] py-6 md:px-5 ${index % 2 === 0 ? 'md:border-r' : ''}`}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-ink)]">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm text-[var(--ink)]">
                {group.items.map((item) => (
                  <li key={item} className="after:ml-3 after:text-[var(--rule)] after:content-['/'] last:after:content-['']">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 border border-[var(--rule)] bg-[var(--surface)] p-5 sm:p-6">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Competencies</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--ink)] sm:text-base">
            {profile.competencies.join(' · ')}
          </p>
        </div>
      </section>

      <section id="experience" className="site-shell border-t border-[var(--rule)] py-12 sm:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">02 — Experience</p>
        <h2 className="font-display mt-2 text-3xl sm:text-4xl">Where I apply full-stack delivery</h2>

        <div className="mt-10 space-y-0 border-t border-[var(--rule)]">
          {profile.experience.map((job) => (
            <article key={`${job.company}-${job.role}`} className="grid gap-4 border-b border-[var(--rule)] py-8 lg:grid-cols-[220px_1fr] lg:gap-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{job.period}</p>
                <p className="mt-2 text-lg font-semibold">{job.company}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl italic">{job.role}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">{job.summary}</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--ink)]">
                  {job.points.map((point) => (
                    <li key={point} className="grid grid-cols-[1rem_1fr] gap-2">
                      <span className="mt-2 h-px bg-[var(--accent)]" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="site-shell border-t border-[var(--rule)] py-12 sm:py-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">03 — Selected work</p>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl">Projects I built end to end</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
            Each demo has its own visual system on purpose — operations, service desks, commerce and analytics should not look identical.
          </p>
        </div>

        <div className="border-t border-[var(--rule)]">
          {projects.map((project, index) => (
            <article key={project.title} className="project-row grid gap-5 border-b border-[var(--rule)] py-7 lg:grid-cols-[4.5rem_1fr_auto] lg:items-start lg:gap-8">
              <p className="font-mono text-sm text-[var(--muted)]">0{index + 1}</p>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl sm:text-3xl">{project.title}</h3>
                  {project.featured ? (
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--accent-ink)]">
                      Featured
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">{project.description}</p>
                <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--ink)]">
                  {project.stack.slice(0, 6).join(' · ')}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {project.demo ? (
                  <Cta href={project.demo} variant="accent">
                    Demo <ExternalLink size={14} />
                  </Cta>
                ) : null}
                {project.repo ? (
                  <Cta href={project.repo} variant="ghost">
                    Code <Github size={14} />
                  </Cta>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="site-shell border-t border-[var(--rule)] py-12 sm:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">04 — Contact</p>
        <h2 className="font-display mt-2 max-w-2xl text-3xl sm:text-5xl">
          If you need someone who can own the UI, the API and the data model — write me.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Cta href={`mailto:${profile.email}`} variant="accent">
            <Mail size={15} /> {profile.email}
          </Cta>
          <Cta href={profile.linkedin} variant="ghost">
            <Linkedin size={15} /> LinkedIn
          </Cta>
          <Cta href={profile.github} variant="ghost">
            <Github size={15} /> GitHub
          </Cta>
          <Cta href={profile.cv} variant="ghost">
            <FileText size={15} /> Download CV
          </Cta>
        </div>
      </section>

      <footer className="site-shell border-t border-[var(--rule)] py-8 font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}

export default App;
