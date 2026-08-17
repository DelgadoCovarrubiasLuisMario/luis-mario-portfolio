import { FileText, Github } from 'lucide-react';
import { profile } from '../data/profile';
import { Cta } from '../components/Cta';

export function HeroSection() {
  return (
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
        <p className="font-display text-2xl italic leading-snug text-[var(--accent-ink)] sm:text-3xl">{profile.role}</p>
        <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-8">{profile.summary}</p>
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
  );
}
