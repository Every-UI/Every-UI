<template>
  <div class="main-container documentation">
    <div>
      Content
    </div>
    <ev-radio v-model="value" label="value1" disabled/>
    <ev-radio v-model="value" label="value2"/>
    <ev-radio v-model="value" label="한글1"/>
  </div>
</template>

<script lang="ts">
import EvRadio from '@every-ui/radio';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Radio',
  components: { EvRadio },
  setup() {
    const value = ref('value1');

    return {
      value
    };
  }
});
</script>

<style lang="scss" scoped>
.documentation {
  background: #e3e1e9;
}
</style>
