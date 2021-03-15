import { createApp } from 'vue';
import EveryUI from 'every-ui/lib/every-ui.umd';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(EveryUI).use(store).use(router)
  .mount('#app');
