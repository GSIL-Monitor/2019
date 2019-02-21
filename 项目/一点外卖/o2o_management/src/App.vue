<template>
  <div id="app">
<!-- <shop-header></shop-header> -->
    <router-view/>
    <!--<shopFooter></shopFooter>-->
  </div>
</template>

<script>
import shopFooter from '@/views/template/Footer.vue'
import shopHeader from '@/views/template/Header.vue'
export default {
  name: 'App',
  components: {
    shopFooter,
    shopHeader
  },
  mouted () {
    window.addEventListener('hashchange', (e) => {
      console.log(e.oldURL)
      debugger
      console.log(e.newURL)
      debugger
    })
  }
}
</script>

<style>

</style>
