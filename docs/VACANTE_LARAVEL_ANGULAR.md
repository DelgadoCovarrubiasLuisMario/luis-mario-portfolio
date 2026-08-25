# Vacante Semi-Senior PHP/Laravel + Angular (Manzanillo) — estado

## Qué se entregó

| Pieza | Estado | Ruta |
|-------|--------|------|
| CV imprimible (español, alineado a la vacante) | Listo | `public/cv-print.html` |
| Texto del CV para copiar/pegar | Listo | `docs/CV_COPY_TEXT.md` |
| Perfil/stack/experiencia del portafolio | Actualizado | `src/data/profile.ts` |
| Proyectos del portafolio | Actualizados | `src/data/projects.ts` |
| Proyecto real Laravel 11 + Angular 19 | **Funcionando** | `../launchops-platform/` |

## Cobertura del stack pedido

| Requisito de la vacante | Dónde se demuestra |
|-------------------------|--------------------|
| PHP 8.2 | `launchops-platform/api` corre en PHP 8.2.12 |
| Laravel 11 | Laravel 11 con Sanctum 4 |
| APIs REST | 11 endpoints en `routes/api.php` |
| MVC | Controllers / Models / Resources separados |
| Eloquent ORM | Modelos con relaciones y scopes |
| Migraciones y Seeders | 6 migraciones propias + `DatabaseSeeder` |
| Composer | `composer.json` / `composer.lock` |
| Sanctum | Login con token, logout revoca token |
| MySQL / SQL Server | Ambos perfiles en `.env.example` |
| NoSQL (deseable) | Listado como nivel básico en CV |
| Angular 19 | SPA standalone con rutas lazy |
| TypeScript 5 | TS 5.7 estricto |
| RxJS | `BehaviorSubject` + `switchMap` en filtros |
| Git / GitHub / GitLab | Repo listo para subir |
| Postman / Swagger | Documentado en CV y notas |
| Testing | 11 pruebas PHPUnit en verde |
| Debugging / optimización | Índices, eager loading, `preventLazyLoading` |
| Code review / PSR-12 | Estilo PSR-12, controllers delgados |

## Actividades del puesto y evidencia

- **Procesos completos autónomos:** LaunchOps de punta a punta (API + SPA + pruebas).
- **Nuevas funcionalidades:** deployments, incidentes, feature flags, auditoría.
- **Refactor de legacy:** capa de servicios (`DeliveryMetrics`, `AuditLogger`) fuera de controllers.
- **APIs:** 11 endpoints con Form Requests y API Resources.
- **Pruebas unitarias e integración:** `php artisan test` → 11 passed.
- **Bugs media-alta:** N+1 evitado con eager loading; índices compuestos por filtro real.
- **Apoyo a juniors:** PSR-12 y estructura por capas documentada en `docs/TECHNICAL_NOTES.md`.
- **Mejoras de rendimiento:** conteos agrupados en SQL en lugar de colecciones en memoria.

## Verificación hecha

- `php artisan test` → **11 passed (32 assertions)**.
- Smoke test HTTP real: `200` login/dashboard/listados, `403` viewer en escrituras y auditoría, `401` sin token, `422` versión inválida.
- Prueba en navegador de la SPA: login → dashboard → filtro de deployments → transición de incidente → toggle de flag → auditoría → logout. Sin errores de consola ni requests fallidos.
- `npm run build` (Angular) y `npm run build` (portafolio) exitosos.

## Pasos que te tocan (subida manual)

1. **Generar el PDF del CV:** abrir `public/cv-print.html` → Imprimir → Guardar como PDF → reemplazar
   `public/Luis-Mario-Delgado-Covarrubias-CV.pdf`.
2. **Subir LaunchOps** como repo nuevo `launchops-platform` (el portafolio ya apunta ahí).
3. **Subir el portafolio** actualizado y redeploy en Vercel.
4. Los repos viejos (`launchops-control-tower`, `serviceflow-suite`, `commercebridge-studio`, `insightops-dashboard`)
   contienen React/Node y **contradicen** el CV: hazlos privados o bórralos. El portafolio ya no los enlaza.

## Talk track para la entrevista

Lo que debes poder explicar sin dudar (todo está en el código):

1. **Sanctum:** `createToken()` en login, `currentAccessToken()->delete()` en logout, middleware `auth:sanctum`.
2. **RBAC:** `EnsureUserHasRole` con `role:admin,engineer`; deniega por defecto y responde 403.
3. **N+1:** `with(['application','triggeredBy'])` + `Model::preventLazyLoading()` en local.
4. **Índices:** `(status, created_at)` y `(environment, created_at)` porque son los filtros de la API.
5. **Validación:** Form Request con regex de semver y `Rule::in` para environment.
6. **Métricas:** `GROUP BY status` en lugar de traer todo a memoria.
7. **Angular:** interceptor funcional para token y 401, guards funcionales, `switchMap` para cancelar requests viejos.
8. **Pruebas:** SQLite en memoria vía `phpunit.xml`, `RefreshDatabase`, `Sanctum::actingAs`.

Cómo correrlo si te lo piden en vivo:

```bash
cd api && composer install && cp .env.example .env && php artisan key:generate
php artisan migrate --seed && php artisan test && php artisan serve
cd ../web && npm install && npm start
```
