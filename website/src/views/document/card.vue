<template>
  <div class="main-container documentation">
    <ev-card class="card-example">
      <ev-button>
        Default
      </ev-button>
      <ev-button glass>
        Glass
      </ev-button>
    </ev-card>
    <ev-card header="Title" glass class="card-example">
      <div>
        Content
      </div>
      <ev-button>
        Default
      </ev-button>
      <ev-button glass>
        Glass
      </ev-button>
    </ev-card>
  </div>
</template>

<script lang="ts">
import EvButton from '@every-ui/button';
import EvCard from '@every-ui/card';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  components: { EvButton, EvCard }
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
