<template>
  <VKbar ref="vkbar" :actions="actions" />
</template>

<script lang="ts">
import Vue from 'vue'
import VKbar from '@/components/VKbar.vue'
// import { KBarAction } from '@/interfaces'
// import { mdiClipboard } from '@mdi/js'

export default Vue.extend({
  name: 'VKbarExample',
  components: {
    VKbar
  },
  mounted () {
    this.$root.$on('toggle-vkbar', () => {
      // @ts-ignore
      this.$refs.vkbar.toggle()
    })
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
          section: 'Navigations',
          perform: () => {
            alert('Navigate to Blog')
          }
        },
        {
          id: 'contact',
          name: 'Contact',
          shortcut: ['c'],
          keywords: 'email',
          section: 'Navigations',
          perform: () => {
            alert('Navigate to Contact')
          }
        },
        {
          id: 'theme-light',
          name: 'Set light theme',
          shortcut: ['t', 'l'],
          keywords: 'light theme',
          section: 'Preferences',
          perform: () => {
            this.$vuetify.theme.dark = false
          }
        },
        {
          id: 'theme-dark',
          name: 'Set dark theme',
          shortcut: ['t', 'd'],
          keywords: 'dark theme',
          section: 'Preferences',
          perform: () => {
            this.$vuetify.theme.dark = true
          }
        }
      ]
    }
  }
})
</script>
