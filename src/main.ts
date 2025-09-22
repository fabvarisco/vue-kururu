import './assets/base.css'
import VueLazyLoad from 'vue3-lazyload'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

app.use(VueLazyLoad, {
  // options...
})

app.mount('#app')
