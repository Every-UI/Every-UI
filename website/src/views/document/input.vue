<template>
  <div class="main-container documentation">
    <div>
      Content
    </div>
    <ev-input v-model="value" class="input"/>
    <ev-input v-model="value" round class="input"/>
    <ev-input v-model="value" round clearable class="input"/>
    <ev-input v-model="value" glass round clearable class="input">
      <template #suffix>
        <em class="ev-icon-plus"/>
      </template>
    </ev-input>
    <ev-input v-model="value2" type="number" class="input">
      <template #suffix>
        <span class="suffix">m/s</span>
      </template>
    </ev-input>
    <ev-input v-model="value2" type="number" clearable class="input"/>
  </div>
</template>

<script lang="ts">
import EvInput from '@every-ui/input';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Input',
  components: { EvInput },
  setup() {
    const value = ref('value');
    const value2 = ref(3);

    return {
      value,
      value2
    };
  }
});
</script>

<style lang="scss" scoped>
.documentation {
  background: #e3e1e9;
}
.input {
  width: 200px;

  .suffix {
    padding-left: 5px;
  }
}
</style>
