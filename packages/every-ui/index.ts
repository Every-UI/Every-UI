import type { App } from 'vue';
import EvAside from '@every-ui/aside/src/aside.vue';
import EvButton from '@every-ui/button/src/button.vue';
import EvCard from '@every-ui/card/src/card.vue';
import EvContainer from '@every-ui/container/src/container.vue';
import EvFooter from '@every-ui/footer/src/footer.vue';
import EvHeader from '@every-ui/header/src/header.vue';
import EvInput from '@every-ui/input/src/input.vue';
import EvMain from '@every-ui/main/src/main.vue';
import EvTag from '@every-ui/tag/src/tag.vue';

const components = [
  EvAside,
  EvButton,
  EvCard,
  EvContainer,
  EvFooter,
  EvHeader,
  EvInput,
  EvMain,
  EvTag
];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export {
  EvAside,
  EvButton,
  EvCard,
  EvContainer,
  EvFooter,
  EvHeader,
  EvInput,
  EvMain,
  EvTag,
  install
};

export default {
  install
};
