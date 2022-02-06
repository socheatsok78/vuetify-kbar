<template>
  <v-dialog
    v-model="show"
    v-hotkey="hotkey"
    content-class="v-kbar"
    eager
    scrollable
    :width="width"
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

import { VDialog } from 'vuetify/lib'
import VKbarContent from './VKbarContent.vue'
import VKbarSearch from './VKbarSearch.vue'
import VKbarResult from './VKbarResult.vue'

type Data = {
  show: boolean
  search: string
}

type Props = {
  actions: KBarAction[]
  width: string | number
}

type Computed = {}

type Methods = {
  toggle: () => void
  close: () => void
  clickOnResult: () => void
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'VKbar',
  components: {
    VDialog,
    VKbarContent,
    VKbarSearch,
    VKbarResult
  },
  props: {
    actions: {
      type: Array
    },
    width: {
      type: [String, Number],
      default: () => 600
    }
  },
  data: () => ({
    show: false,
    search: '',
    hotkey: {
      hotkey: 'Control+k,Meta+k',
      handler: 'toggle'
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
    close () {
      this.show = false
    },
    toggle () {
      this.show = !this.show
    },
    clickOnResult () {
      this.close()
    }
  }
})
</script>

<style scoped>
  >>> .v-kbar {
    position: absolute;
    top: 20%;
  }
</style>
