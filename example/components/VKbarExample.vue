<template>
  <VKbarProvider :actions="actions" />
</template>

<script lang="ts">
import Vue from 'vue'
import VKbarProvider from '@/components/VKbarProvider.vue'
// import { KBarAction } from '@/interfaces'
// import { mdiClipboard } from '@mdi/js'

export default Vue.extend({
  name: 'VKbarExample',
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
          perform: () => {
            alert('Navigate to Blog')
          }
        },
        {
          id: 'contact',
          name: 'Contact',
          shortcut: ['c'],
          keywords: 'email',
          perform: () => {
            alert('Navigate to Contact')
          }
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
