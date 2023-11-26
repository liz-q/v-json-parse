# v-json-parse
- 格式化 json 数据，实现类似 chrome 浏览器 JSONView 插件的功能
- 可以展开 收缩

# 安装

```shell
npm i @liz-q/v-json-parse -S
```

# 使用

全局引入

```js
import Vue form 'vue'
import JsonParse from '@liz-q/v-json-parse'

Vue.use(JsonParse)
```

全局注册后在组件中这么用

```vue
<v-json-parse :json="json" :indent="24"></v-json-parse>
```

json 是要解析的数据，indent 是缩进。



你也可以注册为局部组件：

```vue
<template>
<json-parse :json="json" :indent="24"></json-parse>
</template>
<script>
    import { JsonParse } from '@liz-q/v-json-parse'
    export default {
        components: {
            JsonParse
        }
    }
</script>

```

也可以这样导入

```js
import JsonParse from '@liz-q/v-json-parse/lib/json-parse'
```





