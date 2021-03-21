<template>
  <ev-container>
    <sidebar />
    <ev-main>
      <router-view/>
    </ev-main>
  </ev-container>
</template>

<script lang="ts">

import Sidebar from '@/layout/Sidebar.vue';

export default {
  name: 'AppMain',
  components: { Sidebar }
};
</script>
