import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'admin/task/:id/edit',
    renderMode: RenderMode.Client, // Renders on the client side
  },
  {
    path: 'employee/task/:id/view',
    renderMode: RenderMode.Client, // Renders on the client side
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
