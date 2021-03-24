<template>
  <ev-container id="app-vue" direction="vertical">
    <navbar />
    <app-main />
  </ev-container>
</template>

<script>
import Navbar from '@/layout/navbar.vue';
import AppMain from '@/layout/appMain.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { AppMain, Navbar }
});
</script>

<style lang="scss" scoped>
#app-vue {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

</style>
