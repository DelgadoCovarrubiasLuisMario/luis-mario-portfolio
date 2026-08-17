import { SiteHeader } from './components/SiteHeader';
import { ContactSection } from './sections/ContactSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { StackSection } from './sections/StackSection';
import { profile } from './data/profile';

function App() {
  return (
    <main className="min-h-screen text-[var(--ink)]">
      <SiteHeader />
      <hr className="rule site-shell" />
      <HeroSection />
      <StackSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="site-shell border-t border-[var(--rule)] py-8 font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}

export default App;
