<template>
  <slot />
</template>
<style lang="scss">
#app {
  position: relative;
  display: grid;
  grid-template-columns: 200px max-content;
  width: 400px;
  max-width: 400px;
  aspect-ratio: 400 / 500;
  overflow: hidden;
  background-color: var(--bg-primary);
  box-shadow: 0 4px 200px rgba(0, 0, 0, 0.25);
}
</style>
