<template>
  <div class="home">
    <shopNav></shopNav>
    <router-view />
  </div>
</template>

<script>
import shopNav from '@/views/template/Nav.vue'
export default {
  components: {
    shopNav
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      this.breadList = this.$route.matched
      console.log(this.breadList)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: #f3f3f3;
  min-width: 1180px;
}
</style>
