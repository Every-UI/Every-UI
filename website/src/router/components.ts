import type { Component } from 'vue';

export default {
  documentComponents: [
    { path: '/document/card', name: 'Card', component: (): Component => import('@/views/document/card.vue') },
    { path: '/document/button', name: 'Button', component: (): Component => import('@/views/document/button.vue') },
    { path: '/document/input', name: 'Input', component: (): Component => import('@/views/document/input.vue') },
    { path: '/document/tag', name: 'Tag', component: (): Component => import('@/views/document/tag.vue') }
  ]
};
