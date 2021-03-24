<template>
  <ev-aside class="sidebar">
    <div class="category">
      <div class="category__header">
        Document
      </div>
      <div v-for="component in Components.documentComponents"
           :key="component.path"
           class="menu"
      >
        <router-link :to="component.path" class="link">
          {{ component.name }}
        </router-link>
      </div>
    </div>
  </ev-aside>
</template>

<script lang="ts">

import Components from '@/router/components';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  setup() {
    return {
      Components
    };
  }
});
</script>

<style lang="scss" scoped>
@import 'packages/style/src/common/var.scss';

.sidebar {
  padding:20px;

  .category {
    &__header {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
    }

    .menu {
      height: 30px;
      line-height: 30px;
      .link {
        color: $--color-text-primary;
        text-decoration: none;
        font-size: 14px;

        &:hover {
          color: $--color-primary;
        }
      }
    }
  }
}
</style>
