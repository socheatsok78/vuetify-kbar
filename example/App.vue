<template>
  <v-app id="app">
    <VKbarProvider :actions="actions" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import VKbarProvider from '@/components/VKbarProvider.vue'

const actions = [
  {
    id: 'blog',
    name: 'Blog',
    description: '',
    shortcut: ['b'],
    keywords: 'writing words',
    perform: () => (window.location.pathname = 'blog')
  },
  {
    id: 'contact',
    name: 'Contact',
    shortcut: ['c'],
    keywords: 'email',
    perform: () => (window.location.pathname = 'contact')
  }
]

export default Vue.extend({
  name: 'App',
  components: {
    VKbarProvider
  },
  data: () => ({
    actions: actions
  })
})
</script>
