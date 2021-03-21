<template>
  <section class="ev-container" :class="{'is-vertical': isVertical}">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {
  defineComponent, computed, VNode, Component
} from 'vue';

export default defineComponent({
  name: 'EvContainer',
  props: {
    direction: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true;
      } if (props.direction === 'horizontal') {
        return false;
      }
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default();
        return vNodes.some((vNode) => {
          const tag = (vNode.type as Component).name;
          return tag === 'EvHeader' || tag === 'EvFooter';
        });
      }
      return false;
    });
    return {
      isVertical
    };
  }
});
</script>
