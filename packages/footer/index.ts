import type { App } from 'vue';
import Footer from './src/footer.vue';

Footer.install = (app: App): void => {
  app.component(Footer.name, Footer);
};

export default Footer;
