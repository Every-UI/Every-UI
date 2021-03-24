<template>
  <ev-container>
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
