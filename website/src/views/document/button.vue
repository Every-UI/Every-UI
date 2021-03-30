<template>
  <div class="main-container documentation">
    <div>
      Content
    </div>
    <ev-button>
      Default
    </ev-button>
    <ev-button glass>
      Glass
    </ev-button>
    <ev-button round>
      Round
    </ev-button>
  </div>
</template>

<script lang="ts">
import EvButton from '@every-ui/button';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  components: { EvButton }
});
</script>

<style lang="scss" scoped>
.documentation {
  background: #e3e1e9;
}
.card-example {
  width: 400px;
}
</style>
