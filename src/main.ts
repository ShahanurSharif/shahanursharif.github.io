import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import './styles/main.css';

export const createApp = ViteSSG(
  App,
  { routes: [{ path: '/', component: () => import('./pages/Home.vue') }] },
  ({ app, router, initialState }) => {
    // Install plugins, setup global properties, etc.
  }
);
