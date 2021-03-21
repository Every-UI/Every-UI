<template>
  <ev-container id="app" direction="vertical">
    <navbar />
    <app-main />
  </ev-container>
</template>

<script>
import Navbar from '@/layout/Navbar.vue';
import AppMain from '@/layout/AppMain.vue';

export default {
  components: { AppMain, Navbar }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
