import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'admin/task/:id/view',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { id: '1' },
        { id: '2' },
        { id: '3' }, // Replace with actual IDs you want to prerender
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
