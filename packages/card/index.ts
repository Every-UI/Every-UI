import type { App } from 'vue';
import Card from './src/card.vue';

Card.install = (app: App): void => {
  app.component(Card.name, Card);
};

export default Card;
