<template>
  <div id="app">
    <router-view/>
    <shopFooter></shopFooter>
  </div>
</template>

<script>
import shopFooter from '@/views/template/Footer.vue'
export default {
  name: 'App',
  components: {
    shopFooter
  }
}
</script>
<style lang="scss" scoped>
#app{
  min-width: 1360px;
  background-color: #f3f3f3;
}
</style>
