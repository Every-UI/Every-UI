<template>
  <button
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EvButton',

  setup(props, ctx) {
    const handleClick = (evt: Event) => {
      ctx.emit('click', evt);
    };
    return {
      handleClick
    };
  },
});
</script>
