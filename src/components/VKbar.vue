<template>
  <v-dialog
    v-model="show"
    v-hotkey="hotkey"
    content-class="v-kbar-provider"
    eager
    scrollable
    max-width="600px"
  >
    <v-kbar-content>
      <v-kbar-search v-model="search" />
      <v-kbar-result
        v-model="search"
        :actions="actions"
        @click="() => clickOnResult()"
      />
    </v-kbar-content>
  </v-dialog>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Vue from 'vue'
import { VHotkey } from '@/directives'
import { KBarAction } from '@/interfaces'

import VKbarContent from './VKbarContent.vue'
import VKbarSearch from './VKbarSearch.vue'
import VKbarResult from './VKbarResult.vue'

type Data = {
  show: boolean
  search: string
}

type Props = {
  actions: KBarAction[]
}

type Computed = {}

type Methods = {
  onToggle: () => void
  closeKbar: () => void
  clickOnResult: () => void
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'VKbar',
  components: {
    VKbarContent,
    VKbarSearch,
    VKbarResult
  },
  props: {
    actions: {}
  },
  data: () => ({
    show: false,
    search: '',
    hotkey: {
      hotkey: 'Control+k,Meta+k',
      handler: 'onToggle'
    }
  }),
  directives: {
    hotkey: VHotkey
  },
  provide () {
    return {
      kbar: this
    }
  },
  watch: {
    show: {
      immediate: true,
      handler (state) {
        if (!state) {
          this.search = ''
        }
      }
    }
  },
  methods: {
    closeKbar () {
      this.show = false
    },
    onToggle () {
      console.log('onToggle')
      this.show = !this.show
    },
    clickOnResult () {
      this.closeKbar()
    }
  }
})
</script>

<style scoped>
  >>> .v-kbar-provider {
    position: absolute;
    top: 20%;
  }
</style>
