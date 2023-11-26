<template>
  <div class="ele-json-parse__item">
    <span
      :class="[
        'toggle',
        isOpen ? 'close' : 'open'
      ]"
      @click.stop="isOpen=!isOpen"
    />
    <b v-if="name">{{ name }}</b>
    {{ isArray ? '[' : '{' }}
    {{ isOpen ? '' : '...' }}
    <ul :style="getStyle">
      <template v-for="(k, i) in dataKeys">
        <Item
          v-if="typeof data[k]==='object' && data[k] !== null"
          :key="k"
          :data="data[k]"
          :name="isArray ? '' : k"
          :is-last="i === dataKeys.length - 1"
        />
        <li v-else :key="k">
          <b>{{ isArray ? '' : `${k} : ` }}</b>
          {{ `"${data[k]}"` }}
          {{ i === dataKeys.length - 1 ? '' : ',' }}
        </li>
      </template>
    </ul>
    {{ isArray ? ']' : '}' }}
    {{ isLast ? '' : ',' }}
  </div>
</template>

<script>
export default {
  name: 'Item',
  components: {},
  inject: ['panel'],
  props: {
    data: {},
    name: String,
    isLast: Boolean
  },
  data () {
    return {
      isOpen: true
    }
  },
  computed: {
    getStyle () {
      return {
        paddingLeft: `${this.panel.indent}px`,
        display: this.isOpen ? 'block' : 'none'
      }
    },
    isArray () {
      return Array.isArray(this.data)
    },
    dataKeys () {
      return Object.keys(this.data)
    }
  },
  watch: {},
  created () {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {}
}
</script>
