<template>
  <v-row align-content="center" justify="center" style="height: 100vh">
    <v-col cols="12" class="text-center mb-6">
      <span class="text-h3">
        Vuetify <kbd>kBar</kbd>
      </span>
    </v-col>
    <v-col cols="12" class="text-center">
      <span class="text-subtitle-1">
        <span class="px-2">Press</span>
        <kbd>Meta</kbd> + <kbd>K</kbd>
        <span class="px-2">or</span>
        <kbd>Ctrl</kbd> + <kbd>K</kbd>
      </span>
    </v-col>
    <v-col cols="12" class="text-center">
      <v-btn class="mx-1" x-small text outlined @click="() => toDocs()">Docs</v-btn>
      <v-btn class="mx-1" x-small text outlined @click="() => toGitHub()">GitHub</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'WelcomeBanner',
  methods: {
    toDocs () {
      open('https://github.com/socheatsok78/vuetify-kbar#guide', '_blank')
    },
    toGitHub () {
      open('https://github.com/socheatsok78/vuetify-kbar', '_blank')
    }
  }
}
</script>
