<template>
  <v-list-item dense>
    <v-list-item-content>
      <div class="text-right text-caption">
        <kbd>Meta</kbd> + <kbd>k</kbd> or <kbd>Ctrl</kbd> + <kbd>k</kbd>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import { VListItem, VListItemContent } from 'vuetify/lib'

export default Vue.extend({
  name: 'KBarTips',
  components: {
    VListItem,
    VListItemContent
  }
})
</script>
