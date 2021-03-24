<template>
  <ev-header class="navbar">
    <router-link to="/">Every-UI</router-link>
  </ev-header>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar'
});
</script>

<style lang="scss" scoped>
.navbar {
  padding:20px;
}
</style>
