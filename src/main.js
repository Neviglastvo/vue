// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/sass/main.sass'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  Vue.use(BootstrapVue),
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto'
  })
}

