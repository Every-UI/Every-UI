<template>
  <div class="home">
    <img alt="Vue logo" src="website/src/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <ev-button>
      버튼이다.
    </ev-button>
  </div>
</template>

<script lang="ts">
import EvButton from '@every-ui/button/src/button.vue';
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    EvButton
  },
})
export default class Home extends Vue {}
</script>
