import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'admin/task/:id/edit',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { id: '1' }, // Example parameter
        { id: '2' },
      ];
    },
  },
  {
    path: 'employee/task/:id/view',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { id: '101' }, // Example parameter
        { id: '102' },
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
