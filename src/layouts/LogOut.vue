<template lang="pug">
  .page_logout
    slot
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  export default {
    name: 'LogoutLayout',
  }
</script>
<style lang="scss" scoped>
  @import '../scss/_common.scss';
  .page_logout {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
  }
</style>
