<template>
  <div class="home">
    <img alt="Vue logo" src="website/src/assets/logo.png">
    <ev-button>
      버튼이다.
    </ev-button>
  </div>
</template>

<script lang="ts">
import EvButton from '@every-ui/button';

export default {
  name: 'Guide',
  components: { EvButton }
};
</script>
