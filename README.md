# Vuetify `kBar`

A simple plug-n-play <kbd>cmd</kbd>+<kbd>k</kbd> interface for [Vuetify](http://vuetifyjs.com/).

[Live demo](https://socheat.dev/vuetify-kbar/)

> :warning::warning: This project is currently is in work-in-progress stage.

![Screen Shot 2021-10-31 at 8 27 36 PM](https://user-images.githubusercontent.com/4363857/139585888-5a2c6e9d-a57d-49fb-8421-b730ad1157ef.png)

## Guide

**Install**

> Note: You'll need to bring your own `vuetify`.  
> You can install `vuetify` via `npm install vuetify` or `yarn add vuetify`.

```sh
$ npm install @socheatsok78/vuetify-kbar@next
# or
$ yarn add @socheatsok78/vuetify-kbar@next
```

**Usage**

```vue
<template>
  <v-app id="app">
    <v-kbar :actions="actions" />
  </v-app>
</template>

<script>
import { mdiClipboard } from '@mdi/js'

const actions = [
  {
    id: 'blog',
    name: 'Blog',
    description: '',
    shortcut: ['b'],
    keywords: 'writing words',
    perform: () => (window.location.pathname = 'blog')
  },
  {
    id: 'contact',
    name: 'Contact',
    shortcut: ['c'],
    keywords: 'email',
    perform: () => (window.location.pathname = 'contact')
  }
]

export default {
  name: 'App',
  components: {
    VKbar
  },
  data: () => ({
    actions: actions
  })
}
</script>

```

## Development

This project was created using `@vue/cli` service.

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
