import { createSSRApp } from 'vue';
import App from './App.vue';
import store from './store';
import { useVconsole } from '@/hooks/useVconsole';

import '@/static/styles/index.scss';

useVconsole();

export function createApp() {
  const app = createSSRApp(App);
  app.use(store);
  return {
    app,
    store
  };
}
