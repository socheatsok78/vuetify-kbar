<template>
  <v-dialog
    v-model="show"
    content-class="v-kbar-provider"
    width="600"
    eager
  >
    <v-card>
      <v-list-item class="px-0">
        <v-text-field
          v-model="search"
          label="Type command or Search..."
          placeholder="Type command or Search..."
          solo
          flat
          clearable
          single-line
          hide-details
          autofocus
        />
      </v-list-item>

      <template v-for="(item, i) in actionItems">
        <div :key="i">
          <!-- <v-subheader>User Controls</v-subheader> -->
          <v-list-item @click="() => item.perform()">
              <v-list-item-icon v-if="item.icon">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle v-if="item.description">{{ item.description }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <template v-for="(shortcut, j) in item.shortcut">
                <kbd :key="j">{{ shortcut }}</kbd>
              </template>
            </v-list-item-icon>
          </v-list-item>
        </div>
      </template>

    </v-card>
  </v-dialog>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Vue from 'vue'
import { install } from '@github/hotkey'

interface Action {
  id: string
  name: string
  description?: string
  shortcut?: string[]
  keywords?: string[]
  perform: () => void
}

type Data = {
  show: boolean
  search: string
  actionItems: Action[]
}

type Props = {
  actions: Action[]
}

type Computed = {

}

type Methods = {
  onSearch: (search: string) => void,
  onToggle: () => void
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'VKbarProvider',
  props: {
    actions: {}
  },
  data: () => ({
    show: false,
    search: '',
    actionItems: []
  }),
  mounted () {
    // @ts-ignore
    const el = this.$el
    // @ts-ignore
    install(el, 'Control+k,Meta+k')
    el.addEventListener('click', () => this.onToggle())
  },
  watch: {
    show: {
      immediate: true,
      handler (state) {
        if (!state) {
          this.search = ''
        }
      }
    },
    search: {
      immediate: true,
      handler: 'onSearch'
    }
  },
  methods: {
    onToggle () {
      this.show = !this.show
    },
    onSearch (search: string) {
      if (!search) {
        this.actionItems = this.actions
        return
      }

      this.actionItems = this.actions.filter(item => {
        if (item.name.toLowerCase().includes(search)) {
          return item
        } else if (item.description?.toLowerCase().includes(search)) {
          return item
        } else if (item.keywords?.includes(search)) {
          return item
        }
      })
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
