export type Project = {
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'LaunchOps Platform',
    description:
      'Operations control tower for deployments, incidents, feature flags and audit trails — role-based workflows, delivery metrics and a full admin console.',
    stack: ['REST APIs', 'RBAC', 'Migrations', 'Feature tests', 'SPA', 'SQL'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/launchops-platform',
    featured: true,
  },
  {
    title: 'ServiceFlow Suite',
    description:
      'Service operations platform for work orders, customers, technicians and inventory — status workflows, monthly KPIs and role-gated actions across a web console and API.',
    stack: ['REST APIs', 'RBAC', 'Docker', 'CI/CD', 'SQL', 'SPA'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/serviceflow-suite',
    featured: true,
  },
];
