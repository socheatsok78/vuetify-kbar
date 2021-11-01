<template>
  <v-app id="app">
    <v-container>
      <WelcomeBanner />
      <VKbarExample />
      <UsageGuide />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

import WelcomeBanner from './components/WelcomeBanner.vue'
import VKbarExample from './components/VKbarExample.vue'
import UsageGuide from './components/UsageGuide.vue'

export default Vue.extend({
  name: 'App',
  components: {
    WelcomeBanner,
    VKbarExample,
    UsageGuide
  }
})
</script>
