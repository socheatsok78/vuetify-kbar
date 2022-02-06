<template>
  <v-list-item v-hotkey="hotkey" @click="handleClick" dense>
    <v-list-item-icon v-if="item.icon">
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ item.name }}</v-list-item-title>
      <v-list-item-subtitle v-if="item.description">{{ item.description }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-icon>
      <template v-for="(shortcut, j) in item.shortcut">
        <kbd :key="j" class="mx-1">{{ shortcut }}</kbd>
      </template>
    </v-list-item-icon>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  VListItem,
  VListItemTitle,
  VListItemSubtitle,
  VListItemContent,
  VListItemIcon
} from 'vuetify/lib'
import { VHotkey } from '@/directives'
import { KBarAction } from '@/interfaces'

type Props = {
  item: KBarAction
}

export default Vue.extend<{}, {}, {}, Props>({
  name: 'VKbarAction',
  components: {
    VListItem,
    VListItemTitle,
    VListItemSubtitle,
    VListItemContent,
    VListItemIcon
  },
  props: {
    item: {}
  },
  directives: {
    hotkey: VHotkey
  },
  computed: {
    hotkey () {
      const shortcut = this.item.shortcut?.join('+')
      return {
        hotkey: `Control+${shortcut}`
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click', this.item)
    }
  }
})
</script>
