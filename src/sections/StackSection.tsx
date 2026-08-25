import { profile } from '../data/profile';

export function StackSection() {
  return (
    <section id="stack" className="site-shell border-t border-[var(--rule)] py-12 sm:py-16">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">01 — Stack</p>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl">The stack I ship every day</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
          Laravel 11 APIs, Angular 19 SPAs, SQL Server and MySQL modeling, Sanctum auth, PHPUnit testing and PSR-12 clean code.
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
        <p className="mt-3 text-sm leading-7 text-[var(--ink)] sm:text-base">{profile.competencies.join(' · ')}</p>
      </div>
    </section>
  );
}
