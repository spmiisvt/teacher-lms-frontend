<template>
  <nav class="right__sidebar" :class="{active: isShowSidebar}">
    <div class="right__sidebar--btn" @click="isShowSidebar = !isShowSidebar">
      <i class='bx bx-edit bx-md'></i>
    </div>
    <div class="right__content">
      <div class="content__header">
        <span>Панель управления</span>
        <i class='bx bxs-arrow-from-left bx-md'></i>
      </div>
      <div class="content__inner">
          <slot></slot>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "RightSidebar",
  components: {},
  data() {
    return {
      isShowSidebar: false,
    }
  }
}
</script>

<style lang="scss">
.right__sidebar {
  position: absolute;
  background: var(--bg-root);
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  z-index: 10;
  transform: translateX(100%);
  transition: .3s ease-in-out;
  &.active {
    transform: translateX(0)
  }
  .right__sidebar--btn {
    position: absolute;
    left: -5rem;
    top: 2rem;
    color: var(--bg-root);
    cursor: pointer;
  }
}

.content__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  color: var(--fg-primary);
  span {
    font-size: 1.2rem;
  }
}
.content__inner {
  padding: 1rem;
  color: var(--fg-primary);
}
</style>
