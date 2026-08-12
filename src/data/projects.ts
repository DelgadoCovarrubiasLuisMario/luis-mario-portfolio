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
    title: 'LaunchOps Control Tower',
    description:
      'I built this SaaS operations command center with JWT/RBAC, realtime Socket.IO pulses, deployment workflows, incident management, feature flags, audit trails and org-scoped APIs.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Socket.IO', 'Docker', 'JWT Auth', 'RBAC'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/launchops-control-tower',
    demo: '',
    featured: true,
  },
  {
    title: 'ServiceFlow Suite',
    description:
      'I designed this service operations platform for work orders, customers and inventory — JWT login, role-gated order creation, status updates and month-based KPI dashboards.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'REST APIs', 'JWT Auth', 'RBAC'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/serviceflow-suite',
    demo: '',
  },
  {
    title: 'CommerceBridge Studio',
    description:
      'I built this e-commerce ops dashboard for product catalogs, lead pipelines, theme settings and sanitized Liquid-style storefront previews with admin-key protected writes.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Shopify Liquid', 'Tailwind CSS'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/commercebridge-studio',
    demo: '',
  },
  {
    title: 'InsightOps Dashboard',
    description:
      'I built this delivery analytics dashboard with SQL-backed KPIs, ticket filters, Kanban views and CSV/XLSX exports. It fails closed when the API is down, with an optional explicit demo mode.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'SQL Reports', 'Recharts', 'XLSX'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/insightops-dashboard',
    demo: '',
  },
];
