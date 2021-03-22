<template>
  <button
    :class="[
      'ev-button',
      type ? 'ev-button__' + type : '',
      buttonSize ? 'ev-button__' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-round': round,
        'is-circle': circle,
        'is-glass': glass
      }
    ]"
    @click="handleClick"
  >
    <em v-if="icon" :class="icon"/>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { PropType } from 'vue';
import Config from '@every-ui/utils/config';

type IButtonType = PropType<'default'>

export default defineComponent({
  name: 'EvButton',

  props: {
    type: {
      type: String as IButtonType,
      default: 'default',
      validator: (val: string) => [
        'default'
      ].includes(val)
    },
    size: {
      type: String as PropType<ComponentSize>
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    round: Boolean,
    circle: Boolean,
    glass: Boolean
  },
  setup(props, ctx) {
    const buttonSize = computed(() => props.size || Config.size);
    const buttonDisabled = computed(() => props.disabled);
    // methods
    const handleClick = (evt) => {
      ctx.emit('click', evt);
    };
    return {
      buttonSize,
      buttonDisabled,
      handleClick
    };
  }
});
</script>
