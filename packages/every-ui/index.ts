import type { App } from 'vue';
import EvAside from '@every-ui/aside/src/aside.vue';
import EvButton from '@every-ui/button/src/button.vue';
import EvContainer from '@every-ui/container/src/container.vue';
import EvFooter from '@every-ui/footer/src/footer.vue';
import EvHeader from '@every-ui/header/src/header.vue';
import EvMain from '@every-ui/main/src/main.vue';

const components = [
  EvAside,
  EvButton,
  EvContainer,
  EvFooter,
  EvHeader,
  EvMain
];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export {
  EvAside,
  EvButton,
  EvContainer,
  EvFooter,
  EvHeader,
  EvMain,
  install
};

export default {
  install
};
