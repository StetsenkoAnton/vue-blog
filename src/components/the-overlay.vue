<template lang="pug">
  .the-overlay(v-if="show")
    button.the-overlay_btn(@click="close")
</template>

<script>
  import mainContent from "../../content/single-data/main.json";

  export default {
    name: 'TheOverlay',
    data() { return {
      show: true,
    }},
    methods: {
      close() { this.show = false }
    }
  }
</script>
<style lang="scss">
  @import '../scss/_common.scss';
  .the-overlay {
    background-color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  }
  .the-overlay_btn {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background-color: #fff;;
  }
</style>
