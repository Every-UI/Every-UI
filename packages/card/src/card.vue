<template>
  <div class="ev-card" :class="[{'is-glass': glass}]">
    <div v-if="$slots.header || header" class="ev-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="ev-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang='ts'>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EvCard',
  props: {
    header: {
      type: String,
      default: ''
    },
    bodyStyle: {
      type: [String, Object, Array],
      default: ''
    },
    glass: Boolean
  }
});
</script>
