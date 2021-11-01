<template>
  <v-app id="app">
    <VKbarProvider :actions="actions" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import VKbarProvider from '@/components/VKbarProvider.vue'
// import { KBarAction } from '@/interfaces'
// import { mdiClipboard } from '@mdi/js'

export default Vue.extend({
  name: 'App',
  components: {
    VKbarProvider
  },
  computed: {
    actions () {
      return [
        {
          id: 'blog',
          name: 'Blog',
          // icon: mdiClipboard,
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
        },
        {
          id: 'theme-light',
          name: 'Set light theme',
          shortcut: ['t', 'h'],
          keywords: 'light theme',
          perform: () => {
            this.$vuetify.theme.dark = false
          }
        },
        {
          id: 'theme-dark',
          name: 'Set dark theme',
          shortcut: ['t', 'h'],
          keywords: 'dark theme',
          perform: () => {
            this.$vuetify.theme.dark = true
          }
        }
      ]
    }
  }
})
</script>
