import JsonParse from './json-parse/index.js'

const components = [
  JsonParse
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  JsonParse
}
