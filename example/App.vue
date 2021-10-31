<template>
  <v-app id="app">
    <VKbarProvider :actions="actions" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import VKbarProvider from '@/components/VKbarProvider.vue'
import { KBarAction } from '@/interfaces'
import { mdiClipboard } from '@mdi/js'

const actions: KBarAction[] = [
  {
    id: 'blog',
    name: 'Blog',
    icon: mdiClipboard,
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
