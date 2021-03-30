import type { App } from 'vue';
import Tag from './src/tag.vue';

Tag.install = (app: App): void => {
  app.component(Tag.name, Tag);
};

export default Tag;
