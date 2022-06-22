<template>
  <NavSidebar />
  <main>
    <slot />
  </main>

</template>

<script>
import NavSidebar from "@/components/NavSidebar";
export default {
    name: "AppLayoutDashboard",
    components: {NavSidebar}
}
</script>
<style lang="scss">
#app {
  position: relative;
  display: grid;
  grid-template-columns: 200px max-content;
  width: 1280px;
  max-width: 1280px;
  aspect-ratio: 1280 / 758;
  overflow: hidden;
  background-color: var(--bg-primary);
  box-shadow: 0 4px 200px rgba(0, 0, 0, 0.25);
}
</style>

