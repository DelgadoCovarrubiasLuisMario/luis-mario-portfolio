import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import { Cta } from '../components/Cta';

export function ProjectsSection() {
  return (
    <section id="projects" className="site-shell border-t border-[var(--rule)] py-12 sm:py-16">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">03 — Selected work</p>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl">Projects I built end to end</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
          Operations, service desks, commerce and analytics — each with its own product surface.
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
