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

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "RightSidebar",
  data() {
    return {
      isShowSidebar: false,
    }
  }
}
</script>

<style lang="scss">
.right__sidebar {
  position: relative;
  background: var(--bg-root);
  height: 100%;
  width: 100%;
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
  span {
    font-size: 1.2rem;
  }
}
.content__inner {
  padding: 1rem;
}
</style>
