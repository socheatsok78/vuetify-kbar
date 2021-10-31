<template>
  <v-app id="app">
    <VKbarProvider />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import VKbarProvider from '@/components/VKbarProvider.vue'

export default Vue.extend({
  name: 'App',
  components: {
    VKbarProvider
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
