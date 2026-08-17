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
      'SaaS operations console for deployments, incidents, feature flags and audit trails — JWT auth, org-scoped APIs and realtime status pulses.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Socket.IO', 'Docker', 'JWT', 'RBAC'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/launchops-control-tower',
    demo: 'https://launchops-control-tower.vercel.app',
    featured: true,
  },
  {
    title: 'ServiceFlow Suite',
    description:
      'Service operations platform for work orders, customers and inventory — role-gated writes, status workflows and month-based KPI dashboards.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'REST', 'JWT', 'RBAC'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/serviceflow-suite',
    demo: 'https://luis-mario-serviceflow.vercel.app',
  },
  {
    title: 'CommerceBridge Studio',
    description:
      'E-commerce ops desk for catalogs, leads, theme settings and Liquid-style storefront previews with protected admin writes.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Shopify Liquid', 'Tailwind CSS'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/commercebridge-studio',
    demo: 'https://commercebridge-studio.vercel.app',
  },
  {
    title: 'InsightOps Dashboard',
    description:
      'Delivery analytics with SQL-backed KPIs, ticket filters, Kanban views and CSV/XLSX exports for sprint and release health.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Recharts', 'XLSX'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/insightops-dashboard',
    demo: 'https://insightops-dashboard.vercel.app',
  },
];
