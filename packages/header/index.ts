import type { App } from 'vue';
import Header from './src/header.vue';

Header.install = (app: App): void => {
  app.component(Header.name, Header);
};

export default Header;
