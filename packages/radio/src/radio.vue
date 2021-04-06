<template>
  <label
    class="ev-radio"
    :class="classes"
    role="radio"
    :aria-checked="isChecked"
    :aria-disabled="disabled"
    @keydown.space.stop.prevent="model = (disabled ? model : label)"
  >
    <span
      class="ev-radio__input"
      :class="{
        'is-disabled': disabled,
        'is-checked': isChecked
      }"
    >
      <span class="ev-radio__inner"></span>
      <input
        ref="radio"
        v-model="model"
        class="ev-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        :name="name"
        :disabled="disabled"
        tabindex="-1"
        @change="handleChange"
      >
    </span>
    <span class="ev-radio__label" @keydown.stop>
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script lang="ts">
import {
  defineComponent, computed, ref, nextTick
} from 'vue';
import type { PropType } from 'vue';
import Config from '@every-ui/utils/config';
import Constants from '@every-ui/utils/constants';

export default defineComponent({
  name: 'EvRadio',

  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String as PropType<'default'> // ComponentSize
    },
    disabled: Boolean
  },
  emits: [Constants.UPDATE_MODEL_EVENT, 'change'],
  setup(props, ctx) {
    const radio = ref(null);

    const radioSize = computed(() => props.size || Config.size);
    const classes = computed(() => [
      'ev-radio',
      props.type ? `ev-radio__${props.type}` : '',
      radioSize.value ? `ev-radio__${radioSize.value}` : ''
    ]);

    const model = computed<string | number | boolean>({
      get() {
        return props.modelValue;
      },
      set(val) {
        ctx.emit(Constants.UPDATE_MODEL_EVENT, val);
        radio.value.checked = props.modelValue === props.label;
      }
    });
    const isChecked = computed(() => model.value === props.label);

    // methods
    function handleChange() {
      nextTick(() => {
        ctx.emit('change', model.value);
      });
    }

    return {
      radio,
      classes,
      model,
      isChecked,
      handleChange
    };
  }
});
</script>
