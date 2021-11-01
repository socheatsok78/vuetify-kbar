<template>
  <div class="v-kbar-result" >
    <template v-for="(item, i) in computedResultItems">
      <v-kbar-action
        :item="item"
        :key="i"
        @click="handlePerformAction"
      />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { KBarAction } from '@/interfaces'
import { throttle } from 'throttle-debounce'

import VKbarAction from './VKbarAction.vue'

type Data = {}

type Props = {
  value: string
  actions: KBarAction[]
}

type Computed = {
  computedResultItems: KBarAction[]
}

type Methods = {
  handleSearchAction: (query: string) => void
  handlePerformAction: (action: KBarAction) => void
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'VKbarResult',
  components: {
    VKbarAction
  },
  props: {
    value: {
      default: () => ''
    },
    actions: {}
  },
  data: () => ({
    computedResultItems: []
  }),
  watch: {
    value: {
      immediate: true,
      handler: 'handleSearchAction'
    }
  },
  methods: {
    handleSearchAction (query: string) {
      searchHandler(query, this.actions, (result) => {
        this.computedResultItems = result
      })
    },
    handlePerformAction (action: KBarAction) {
      this.$emit('click', action)

      if (!action.perform) {
        console.error('[VKbar] Unable to execute action.')
        return
      }

      this.$nextTick(() => action.perform())
    }
  }
})

const searchHandler = throttle(400, false, (query: string, actions: KBarAction[], handler: ((result: KBarAction[]) => void)) => {
  const search = query.toLowerCase()
  let result: KBarAction[] = []

  if (!search) {
    result = actions
  } else {
    result = actions.filter(action => {
      if (action.name.toLowerCase().includes(search)) {
        return action
      } else if (action.description?.toLowerCase().includes(search)) {
        return action
      } else if (action.keywords?.includes(search)) {
        return action
      } else if (matchesShortcut(action.shortcut || [], search.split(''))) {
        return action
      }
    })
  }

  handler(result)
})

const matchesShortcut = (shortcut: string[], search: string[]) => {
  return shortcut.every((cur, i) => cur === search[i])
}
</script>
