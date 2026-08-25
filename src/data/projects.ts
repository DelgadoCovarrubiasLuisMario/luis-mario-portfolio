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
];
