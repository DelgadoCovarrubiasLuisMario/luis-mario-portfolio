export type Project = {
  title: string;
  /** Primary stack pairing shown on the portfolio card */
  alignment: string;
  description: string;
  role: string;
  stack: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'LaunchOps Platform',
    alignment: 'Laravel 11 · Angular 19',
    description:
      'Operations control tower for deployments, incidents, feature flags and audit trails — role-based workflows, delivery metrics and a full admin console.',
    role: 'Team Lead · end-to-end API + SPA delivery',
    stack: ['PHP 8.2', 'Sanctum', 'Eloquent', 'PHPUnit', 'MySQL', 'RxJS', 'TypeScript'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/launchops-platform',
    featured: true,
  },
  {
    title: 'ServiceFlow Suite',
    alignment: 'Rails 7 · React 19',
    description:
      'Service operations platform for work orders, customers, technicians and inventory — status workflows, monthly KPIs and role-gated actions across a web console and API.',
    role: 'Full-stack · REST API, admin console & CI/CD',
    stack: ['ActiveRecord', 'RSpec', 'PostgreSQL', 'JWT RBAC', 'Docker', 'GitHub Actions', 'AWS-ready'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/serviceflow-suite',
    featured: true,
  },
];
