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
      'I built this operations control tower on Laravel 11 and Angular 19: Sanctum token auth, fail-closed role middleware, Eloquent models with indexed migrations and seeders, deployment and incident workflows, feature flags, an audited trail and PHPUnit feature tests.',
    stack: ['PHP 8.2', 'Laravel 11', 'Sanctum', 'Eloquent', 'MySQL', 'Angular 19', 'TypeScript 5', 'RxJS', 'PHPUnit'],
    repo: 'https://github.com/DelgadoCovarrubiasLuisMario/launchops-platform',
    featured: true,
  },
  {
    title: 'ServiceFlow Suite',
    description:
      'Service operations platform for work orders, customers and inventory — Laravel REST endpoints with role-gated writes, status workflows and monthly KPI reporting, consumed by an Angular console with reactive forms and route guards.',
    stack: ['Laravel 11', 'Eloquent', 'MySQL', 'Angular 19', 'TypeScript 5', 'RxJS', 'REST APIs', 'PHPUnit'],
  },
  {
    title: 'CommerceBridge Studio',
    description:
      'Commerce back office for catalogs, leads and store settings — Laravel APIs documented with Swagger, Eloquent relations, MySQL reporting queries and Angular admin routes protected by guards and interceptors.',
    stack: ['Laravel 11', 'Sanctum', 'MySQL', 'Swagger/OpenAPI', 'Angular 19', 'TypeScript 5', 'Reactive Forms'],
  },
  {
    title: 'InsightOps Dashboard',
    description:
      'Delivery analytics with SQL-backed KPIs over SQL Server and MySQL — Laravel reporting endpoints with optimized queries and indexes, ticket filters, Kanban views and Excel/CSV exports rendered in Angular with RxJS streams.',
    stack: ['Laravel 11', 'SQL Server', 'MySQL', 'Query Optimization', 'Angular 19', 'RxJS', 'PHPUnit'],
  },
];
