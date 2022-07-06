<template>
  <AppLayout>
    <router-view/>
  </AppLayout>
</template>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/style.css";
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css';
</style>
<script>

import AppLayout from "@/layouts/AppLayout";

export default {
  components: {AppLayout}
}
</script>
