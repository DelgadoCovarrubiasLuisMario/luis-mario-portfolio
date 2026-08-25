import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { Cta } from '../components/Cta';

export function ContactSection() {
  return (
    <section id="contact" className="site-shell border-t border-[var(--rule)] py-12 sm:py-16">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">04 — Contact</p>
      <h2 className="font-display mt-2 max-w-2xl text-3xl sm:text-5xl">
        If you need someone who can own the Laravel API, the Angular UI and the SQL data model — write me.
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
      </div>
    </section>
  );
}
