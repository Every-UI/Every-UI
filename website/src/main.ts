import { createApp } from 'vue';
import EveryUI from 'every-ui/lib/every-ui.umd';
import router from '@/router';
import store from '@/store';
import App from './app.vue';

import '@/style/index.scss';
import '@every-ui/style/src/index.scss';
// import 'every-ui/lib/style/index.css';

createApp(App)
  .use(store)
  .use(router)
  .use(EveryUI)
  .mount('#app');
