import type { App } from 'vue';
import Main from './src/main.vue';

Main.install = (app: App): void => {
  app.component(Main.name, Main);
};

export default Main;
