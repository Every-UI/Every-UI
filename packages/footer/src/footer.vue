<template>
  <footer class="ev-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EvFooter',
  props: {
    height: {
      type: String,
      default: '40px'
    }
  }
});
</script>
