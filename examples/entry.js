import Vue from 'vue'
import entry from './app.vue'
// import Comps from '../lib/index'
// import JsonParse from '../src/json-parse'
// import { JsonParse } from '../lib/index'
import Comps from 'main/index'

Vue.use(Comps)

new Vue(entry).$mount('#app')
