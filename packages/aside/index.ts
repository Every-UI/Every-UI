import type { App } from 'vue';
import Aside from './src/aside.vue';

Aside.install = (app: App): void => {
  app.component(Aside.name, Aside);
};

export default Aside;
