<template>

  <NavSidebar />
  <main>
    <router-view/>

  </main>
  <RightSidebar />


</template>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/style.css";
</style>
<script>
import NavSidebar from "@/components/NavSidebar";
import RightSidebar from "@/components/RightSidebar";
export default {
  components: {RightSidebar, NavSidebar}
}
</script>
