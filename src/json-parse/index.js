import JsonParse from './src/main'

JsonParse.install = function (Vue) {
  Vue.component(JsonParse.name, JsonParse)
}

export default JsonParse
