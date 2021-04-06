<template>
  <span :class="classes" :style="{ backgroundColor: color }" @click="handleClick">
    <input v-if="editable && editMode"
           ref="input"
           type="text"
           class="ev-tag__input"
           @input="handleInput"
           @focus="handleFocus"
           @blur="handleBlur"
           @change="handleChange"
           @keydown.enter.stop="handleEnter"
           @submit.prevent
    />
    <span v-else-if="editable && !editMode">
      {{ nativeInputValue }}
    </span>
    <slot v-else-if="!editable"></slot>
    <span v-if="editable && editMode" ref="inputValueString" class="hidden-area">
      {{ nativeInputValue }}
    </span>
    <em v-if="closable" class="ev-tag__close ev-icon-close" @click="handleClose"/>
  </span>
</template>

<script lang="ts">
import {
  defineComponent, computed, ref, nextTick, watch
} from 'vue';
import type { PropType } from 'vue';
import Config from '@every-ui/utils/config';
import Constants from '@every-ui/utils/constants';

export default defineComponent({
  name: 'EvTag',

  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    closable: Boolean,
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String as PropType<'default'> // ComponentSize
    },
    icon: {
      type: String,
      default: ''
    },
    editable: Boolean,
    round: Boolean,
    glass: Boolean
  },
  emits: [Constants.UPDATE_MODEL_EVENT, 'input', 'change', 'focus', 'blur', 'close', 'click', 'enter'],
  setup(props, ctx) {
    const input = ref(null);
    const inputValueString = ref(null);
    const editMode = ref(false);

    const tagSize = computed(() => props.size || Config.size);
    const classes = computed(() => {
      const { type, round, glass } = props;
      return [
        'ev-tag',
        type ? `ev-tag__${type}` : '',
        tagSize.value ? `ev-tag__${tagSize.value}` : '',
        {
          'is-round': round,
          'is-glass': glass,
          'is-edit': editMode.value
        }
      ];
    });
    const nativeInputValue = computed(() => ((props.modelValue === null || props.modelValue === undefined) ? '' : String(props.modelValue)));

    // methods
    const setInputWidth = () => {
      input.value.style.width = `${inputValueString.value.clientWidth + 30}px`;
    };
    const setNativeInputValue = () => {
      input.value.value = nativeInputValue.value;
    };
    const focus = () => {
      nextTick(() => {
        if (!input.value) {
          return;
        }
        input.value.focus();
        setInputWidth();
        setNativeInputValue();
      });
    };
    const changeEditMode = (mode: boolean) => {
      editMode.value = mode;

      if (mode) {
        focus();
      }
    };

    watch(nativeInputValue, () => {
      setNativeInputValue();
    });

    const handleClose = (event) => {
      event.stopPropagation();
      ctx.emit('close', event);
    };
    const handleClick = (event) => {
      if (props.editable) {
        changeEditMode(true);
      }
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
        setInputWidth();
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
      if (input.value) {
        input.value.blur();
      }
      changeEditMode(false);
      ctx.emit('blur', event);
    };
    const handleEnter = (event) => {
      changeEditMode(false);
      ctx.emit('enter', event);
    };

    return {
      input,
      inputValueString,
      classes,
      nativeInputValue,
      editMode,
      changeEditMode,
      handleClose,
      handleClick,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleEnter
    };
  }
});
</script>
