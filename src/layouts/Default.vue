<template lang="pug">
  .page
    page-header
    .header_heightfix
    slot
    page-footer
    the-overlay
    //-load-spinner
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import PageHeader from '@/components/page-header/page-header.vue';
  import PageFooter from '@/components/page-footer/page-footer.vue';
  import TheOverlay from '@/components/the-overlay.vue';
  //export const LoadSpinner = '@/components/load-spinner.vue';

  export default {
    name: 'DefaultLayout',
    components: {
      PageFooter,
      PageHeader,
      TheOverlay
      //LoadSpinner
    }
  }
</script>
<style lang="scss">
  @import '../scss/_common.scss';
</style>
