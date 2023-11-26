<template>
  <div class="ele-json-parse">
    <Item
      v-if="jsonData && typeof jsonData === 'object'"
      :data="jsonData"
      :is-last="true"
    />
    <span v-else>{{jsonData}}</span>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  name: 'VJsonParse',
  components: {
    Item
  },
  provide () {
    return {
      panel: this
    }
  },
  props: {
    json: {
      type: [Object, String]
    },
    indent: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      jsonData: null
    }
  },
  computed: {},
  watch: {
    json: {
      handler (val) {
        if (!val) return
        if (typeof val === 'object') {
          this.jsonData = val
        }
        if (typeof val === 'string') {
          try {
            this.jsonData = JSON.parse(val)
          } catch (e) {
            console.error('json 数据格式有误！')
          }
        }
      },
      // deep: true,
      immediate: true
    }
  },
  created () {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {}
}
</script>

<style lang="scss">
.ele-json-parse {
  padding-left: 10px;
  font-size: 14px;

  ul,li{
    list-style: none;
    font-size: 14px;
    margin: 0;
  }

  &__item {
    position: relative;

    .toggle {
      position: absolute;
      cursor: pointer;
      left: -10px;
      color: red;
    }

    .open::after {
      content: '+';
    }

    .close::after {
      content: '-';
    }
  }
}
</style>
