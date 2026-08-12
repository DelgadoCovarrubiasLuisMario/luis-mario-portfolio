import type { ReactNode } from 'react';
import { ExternalLink, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from './data/profile';
import { projects } from './data/projects';

const navItems = [
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function LinkButton({
  href,
  children,
  variant = 'solid',
}: {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'outline';
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5';
  const styles =
    variant === 'solid'
      ? 'bg-white text-slate-950 hover:bg-slate-200'
      : 'border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-900';

  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-3xl leading-7 text-slate-400">{description}</p> : null}
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_32rem)]" />

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <a href="#top" className="text-sm font-semibold tracking-tight text-white">
          {profile.shortName}
        </a>
        <nav className="hidden items-center gap-5 text-sm text-slate-400 sm:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-5xl px-6 pb-14 pt-10 sm:pb-18 sm:pt-16">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-800 px-3 py-1 text-sm text-slate-400">
          <MapPin size={15} /> {profile.location}
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {profile.name}
        </h1>
        <h2 className="mt-4 text-2xl font-medium text-cyan-300 sm:text-3xl">{profile.role}</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">{profile.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {profile.highlights.map((item) => (
            <span key={item} className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm text-slate-300">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="#projects">View projects</LinkButton>
          <LinkButton href={profile.github} variant="outline">
            <Github size={16} /> GitHub
          </LinkButton>
          <LinkButton href={profile.linkedin} variant="outline">
            <Linkedin size={16} /> LinkedIn
          </LinkButton>
          <LinkButton href={profile.cv} variant="outline">
            <FileText size={16} /> Download CV
          </LinkButton>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-5xl border-t border-slate-800 px-6 py-10">
        <SectionHeading
          eyebrow="Stack"
          title="Tools I use to build and ship software"
          description="This is the stack I reach for when I ship full-stack web platforms, backend APIs, SQL databases, e-commerce workflows and production-ready delivery."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {profile.stackGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Core Competencies</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.competencies.map((item) => (
              <span key={item} className="rounded-full bg-slate-800/80 px-3 py-1 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-5xl border-t border-slate-800 px-6 py-10">
        <SectionHeading
          eyebrow="Experience"
          title="Where I apply full-stack delivery"
          description="A concise look at the same professional experience I highlight in my CV."
        />

        <div className="grid gap-4">
          {profile.experience.map((job) => (
            <article key={`${job.company}-${job.role}`} className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <p className="mt-1 text-cyan-200">{job.company}</p>
                </div>
                <p className="text-sm text-slate-500">{job.period}</p>
              </div>
              <p className="mt-4 max-w-4xl leading-7 text-slate-300">{job.summary}</p>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-400">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl border-t border-slate-800 px-6 py-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects I built"
          description="I use these projects to show how I approach SaaS operations, service management, e-commerce workflows, analytics dashboards and database-driven business tools."
        />

        <div className="grid gap-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-600 hover:bg-slate-900"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    {project.featured ? (
                      <span className="rounded-full border border-cyan-400/40 px-3 py-1 text-xs font-medium text-cyan-200">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {project.demo || project.repo ? (
                  <div className="flex shrink-0 gap-3">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                      >
                        Demo <ExternalLink size={15} />
                      </a>
                    ) : null}

                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                      >
                        Code <Github size={15} />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl border-t border-slate-800 px-6 py-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Reach me by email, or check my GitHub, LinkedIn and CV."
        />

        <div className="grid gap-3 text-slate-300 sm:grid-cols-2">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl border border-slate-800 p-4 transition hover:border-slate-600 hover:bg-slate-900">
            <Mail size={18} /> {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-slate-800 p-4 transition hover:border-slate-600 hover:bg-slate-900">
            <Github size={18} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-slate-800 p-4 transition hover:border-slate-600 hover:bg-slate-900">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href={profile.cv} className="flex items-center gap-3 rounded-2xl border border-slate-800 p-4 transition hover:border-slate-600 hover:bg-slate-900">
            <FileText size={18} /> Download CV
          </a>
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-600">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.
      </footer>
    </main>
  );
}

export default App;
