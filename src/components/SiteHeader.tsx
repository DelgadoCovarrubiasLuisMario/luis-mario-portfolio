import { profile } from '../data/profile';

const navItems = [
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  return (
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
  );
}
