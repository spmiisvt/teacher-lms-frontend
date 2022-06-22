<template>
  <div class="dashboard__header">
    <h1>{{this.$route.meta.title}}</h1>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Dashboard"
}
</script>

<style lang="scss">
.dashboard__header {
  padding: 0 1rem 1rem;
  border-bottom: 1px solid var(--hi-primary);
}

</style>
