<template>
  <v-app id="app">
    <UsageGuide />
    <VKbarExample />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

import UsageGuide from './components/UsageGuide.vue'
import VKbarExample from './components/VKbarExample.vue'

export default Vue.extend({
  name: 'App',
  components: {
    UsageGuide,
    VKbarExample
  }

})
</script>
