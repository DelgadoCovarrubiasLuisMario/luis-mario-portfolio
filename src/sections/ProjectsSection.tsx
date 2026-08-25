import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import { Cta } from '../components/Cta';
import { profile } from '../data/profile';

export function ProjectsSection() {
  return (
    <section id="projects" className="site-shell border-t border-[var(--rule)] py-12 sm:py-16 lg:py-20">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">01 — Selected work</p>
          <h1 className="font-display mt-2 text-[clamp(2.25rem,6vw,4rem)] leading-[0.95] tracking-[-0.02em]">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            {profile.location} · Software Engineer
          </p>
        </div>
        <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
          End-to-end systems I designed, built and shipped — details on stack and experience are in my resume.
        </p>
      </div>

      <div className="border-t border-[var(--rule)]">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="project-row grid gap-5 border-b border-[var(--rule)] py-7 lg:grid-cols-[4.5rem_1fr_auto] lg:items-start lg:gap-8"
          >
            <p className="font-mono text-sm text-[var(--muted)]">0{index + 1}</p>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-display text-2xl sm:text-3xl">{project.title}</h2>
                {project.featured ? (
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--accent-ink)]">
                    Featured
                  </span>
                ) : null}
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">{project.description}</p>
              <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--ink)]">
                {project.stack.join(' · ')}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {project.demo ? (
                <Cta href={project.demo} variant="accent">
                  Live <ExternalLink size={14} />
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
  );
}
