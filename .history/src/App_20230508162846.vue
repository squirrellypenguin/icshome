<template>
 <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
  <!-- <component :is="layout">
    <router-view :layout.sync="layout"/>
  </component> -->
</template>


<script>
export default {
  computed: {
    layout() {
      return `layout-${this.$route.meta.layout || 'default'}`
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'art';
  src: local('art'), url(./assets/fonts/art.otf) format('opentype');
}
@font-face {
  font-family: 'anti';
  src: local('art'), url(./assets/fonts/anti.ttf) format('truetype');
}
</style>
