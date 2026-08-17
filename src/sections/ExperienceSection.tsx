import { profile } from '../data/profile';

export function ExperienceSection() {
  return (
    <section id="experience" className="site-shell border-t border-[var(--rule)] py-12 sm:py-16">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">02 — Experience</p>
      <h2 className="font-display mt-2 text-3xl sm:text-4xl">Where I apply full-stack delivery</h2>

      <div className="mt-10 space-y-0 border-t border-[var(--rule)]">
        {profile.experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="grid gap-4 border-b border-[var(--rule)] py-8 lg:grid-cols-[220px_1fr] lg:gap-10"
          >
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
  );
}
