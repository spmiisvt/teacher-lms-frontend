<template>
  <AppLayout>
    <router-view/>
  </AppLayout>
</template>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/style.css";
</style>
<script>

import AppLayout from "@/layouts/AppLayout";

export default {
  components: {AppLayout}
}
</script>
