<template>
  <aside class="ev-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EvAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
});
</script>
