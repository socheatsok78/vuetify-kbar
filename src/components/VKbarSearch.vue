<template>
  <v-list-item class="px-0">
    <v-text-field
      ref="textField"
      v-model="search"
      label="Type command or Search..."
      placeholder="Type command or Search..."
      solo
      flat
      clearable
      single-line
      hide-details
      autofocus
      v-focus
    />
  </v-list-item>
</template>

<script>
import { VFocus } from '@/directives'

export default {
  name: 'VKbarSearch',
  props: {
    value: {}
  },
  data: () => ({
    search: '',
    hotkey: {
      hotkey: 'Control+k,Meta+k',
      handler: 'onToggle'
    }
  }),
  directives: {
    focus: VFocus
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.search = val
      }
    },
    search (val) {
      this.$emit('input', val)
    }
  }
}
</script>
