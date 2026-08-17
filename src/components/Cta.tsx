import type { ReactNode } from 'react';

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'ghost' | 'accent';
};

export function Cta({ href, children, variant = 'solid' }: CtaProps) {
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
