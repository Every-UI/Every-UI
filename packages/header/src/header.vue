<template>
  <header class="ev-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EvHeader',
  props: {
    height: {
      type: String,
      default: '80px'
    }
  }
});
</script>
