<template>

  <NavSidebar />
  <main>
    <router-view/>
  </main>



</template>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/style.css";
</style>
<script>
import NavSidebar from "@/components/NavSidebar";

export default {
  components: {NavSidebar}
}
</script>
