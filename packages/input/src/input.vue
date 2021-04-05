<template>
  <div :class="classes" @click="handleClick">
    <input ref="input"
           :type="type"
           class="ev-input__inner"
           :disabled="disabled"
           :readonly="readonly"
           @input="handleInput"
           @focus="handleFocus"
           @blur="handleBlur"
           @change="handleChange"
           @keydown="handleKeydown"
    />
    <span v-if="clearable || $slots.suffix" ref="option" class="ev-input__option">
      <em v-if="clearable" class="ev-input__close ev-icon-close" @click="handleClear"/>
      <slot name="suffix"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed, ref, nextTick, watch, onMounted
} from 'vue';
import type { PropType } from 'vue';
import Config from '@every-ui/utils/config';
import Constants from '@every-ui/utils/constants';

export default defineComponent({
  name: 'EvInput',

  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String as PropType<'default'> // ComponentSize
    },
    disabled: Boolean,
    readonly: Boolean,
    clearable: Boolean,
    round: Boolean,
    glass: Boolean
  },
  emits: [Constants.UPDATE_MODEL_EVENT, 'input', 'change', 'focus', 'blur', 'close', 'click', 'clear', 'keydown'],
  setup(props, ctx) {
    const input = ref(null);
    const option = ref(null);

    const inputSize = computed(() => props.size || Config.size);
    const classes = computed(() => {
      const { type, round, glass } = props;
      return [
        'ev-input',
        type ? `ev-input__${type}` : '',
        inputSize.value ? `el-input__${inputSize.value}` : '',
        {
          'is-round': round,
          'is-glass': glass
        }
      ];
    });
    const nativeInputValue = computed(() => ((props.modelValue === null || props.modelValue === undefined) ? '' : String(props.modelValue)));

    // methods
    const setNativeInputValue = () => {
      input.value.value = nativeInputValue.value;
    };
    const focus = () => {
      nextTick(() => {
        input.value.focus();
        setNativeInputValue();
      });
    };

    const setInputWidth = () => {
      if (option.value) {
        input.value.style.width = `calc(100% - ${option.value.offsetWidth}px)`;
      }
    };

    watch(nativeInputValue, () => {
      setNativeInputValue();
    });

    onMounted(() => {
      setNativeInputValue();
      setInputWidth();
    });

    const handleClear = (event) => {
      ctx.emit(Constants.UPDATE_MODEL_EVENT, '');
      ctx.emit('clear', event);
    };
    const handleClick = (event) => {
      focus();
      ctx.emit('click', event);
    };
    const handleInput = (event) => {
      const { value } = event.target;
      if (value === nativeInputValue.value) {
        return;
      }

      ctx.emit(Constants.UPDATE_MODEL_EVENT, value);
      ctx.emit('input', value);
      nextTick(() => {
        setNativeInputValue();
      });
    };
    const handleChange = (event) => {
      ctx.emit('change', event.target.value);
    };
    const handleFocus = (event) => {
      ctx.emit('focus', event);
    };
    const handleBlur = (event) => {
      ctx.emit('blur', event);
    };
    const handleKeydown = (event) => {
      ctx.emit('keydown', event);
    };

    return {
      input,
      option,
      tagSize: inputSize,
      classes,
      nativeInputValue,
      handleClear,
      handleClick,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleKeydown
    };
  }
});
</script>
