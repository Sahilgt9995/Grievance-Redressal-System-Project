
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Grievance-Redressal-System-Project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/aboutus"
  },
  {
    "renderMode": 0,
    "route": "/contactus"
  },
  {
    "renderMode": 0,
    "route": "/login"
  },
  {
    "renderMode": 0,
    "route": "/register"
  },
  {
    "renderMode": 0,
    "route": "/admin"
  },
  {
    "renderMode": 0,
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 0,
    "route": "/admin/task/post"
  },
  {
    "renderMode": 1,
    "route": "/admin/task/*/edit"
  },
  {
    "renderMode": 0,
    "route": "/admin/task/*/view"
  },
  {
    "renderMode": 0,
    "route": "/admin/showgrievance"
  },
  {
    "renderMode": 0,
    "route": "/employee"
  },
  {
    "renderMode": 0,
    "route": "/employee/dashboard"
  },
  {
    "renderMode": 1,
    "route": "/employee/task/*/view"
  },
  {
    "renderMode": 0,
    "route": "/user"
  },
  {
    "renderMode": 0,
    "route": "/user/dashboard"
  },
  {
    "renderMode": 0,
    "route": "/user/grievance"
  }
],
  assets: {
    'index.csr.html': {size: 18827, hash: 'df9891afeb1ded6cef0d226bbcb2aae8bfdedc4da08b73c8dd8a25a76ccc31a2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8113, hash: '094bd4d58872613d513c904daeea8c15e4b94d719f63c7455f65ce954ba3cc35', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-63PMUIWA.css': {size: 238590, hash: 'bWTlSPeaBYE', text: () => import('./assets-chunks/styles-63PMUIWA_css.mjs').then(m => m.default)}
  },
};
