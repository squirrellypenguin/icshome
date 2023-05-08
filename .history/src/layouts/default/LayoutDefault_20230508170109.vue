<template>
  <div class="default-page-wrapper">
    <default-nav />
    <slot />
    <default-footer />
  </div>
</template>

<script>
import DefaultFooter from './DefaultFooter.vue'
import DefaultNav from './DefaultNav.vue'

export default {
  components: {
    DefaultNav,
    DefaultFooter
  }
}
</script>

<style lang="scss">
/* Sticky footer */
html {
  position: relative;
  min-height: 100%;
  align-content: center;
}
body {
  margin-bottom: 60px; /* Margin bottom equal to footer height */
}
.default-page-wrapper {
  padding: 5em 0em 3em 0em;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Footer height */
  line-height: 60px; /* Vertically center the text */
  
  text-align: center;
}
</style>
