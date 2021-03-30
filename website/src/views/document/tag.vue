<template>
  <div class="main-container documentation">
    <div>
      Content
    </div>
    <ev-tag>
      Default
    </ev-tag>
    <ev-tag closable>
      Closable
    </ev-tag>
    <ev-tag glass>
      Glass
    </ev-tag>
    <ev-tag round>
      Round
    </ev-tag>
    <ev-tag round closable>
      Round Closable
    </ev-tag>
    <ev-tag v-model="editableTag" editable @input="handleInput"/>
  </div>
</template>

<script lang="ts">
import EvTag from '@every-ui/tag';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Tag',
  components: { EvTag },
  setup() {
    const editableTag = ref('editableTag');

    const handleInput = (value) => {
      console.log(value);
      console.log(1);
    };

    return {
      editableTag,
      handleInput
    };
  }
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
