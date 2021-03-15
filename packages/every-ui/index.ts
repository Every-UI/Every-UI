import type { App } from 'vue';
import EVButton from '../button/src/button.vue';

const components = [
  EVButton
];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export {
  EVButton,
  install
};

export default {
  install
};
