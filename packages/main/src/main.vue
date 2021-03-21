<template>
  <main class="ev-main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EvMain'
});
</script>
