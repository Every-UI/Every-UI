<template>
  <ev-container class="app-main">
    <sidebar />
    <ev-main>
      <router-view/>
    </ev-main>
  </ev-container>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Sidebar from './sidebar.vue';

export default defineComponent({
  name: 'AppMain',
  components: { Sidebar }
});
</script>

<style lang="scss" scoped>
.app-main {
  @media (max-width: 1024px) {
    flex-flow: column;
  }
}
</style>
