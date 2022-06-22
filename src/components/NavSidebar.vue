<template>
  <nav class="sidebar">
    <div class="logo">
        <span>Teacher LMS</span>
    </div>
    <div class="sidebar__menu">
      <div class="sidebar__menu--item" @click="$router.push({name: 'Subjects'})">
        <i class='bx bxs-dashboard bx-sm'></i><span>Дисциплины</span>
      </div>

      <div class="sidebar__menu--item" @click="$router.push({name: 'Groups'})">
        <i class='bx bxs-group bx-sm'></i><span>Группы</span>
      </div>

      <div class="sidebar__menu--item" @click="$router.push({name: 'Students'})">
        <i class='bx bxs-graduation bx-sm'></i><span>Студенты</span>
      </div>

      <div class="sidebar__menu--item" @click="$router.push({name: 'Attendance'})">
        <i class='bx bx-check-square bx-sm'></i><span>Посещаемость</span>
      </div>

      <div class="sidebar__menu--item" @click="$router.push({name: 'Estimation'})">
        <i class='bx bx-like bx-sm'></i><span>Аттестация</span>
      </div>

      <div class="sidebar__menu--item" @click="$router.push({name: 'Presentation'})">
        <i class='bx bx-share-alt bx-sm'></i><span>Трансляция</span>
      </div>

      <div class="sidebar__menu--item" @click="$router.push({name: 'Files'})">
        <i class='bx bx-file-blank bx-sm'></i><span>Файлы</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavSidebar"
}
</script>

<style lang="scss">
.sidebar {
  background: #6674BB;
  height: 100%;
  width: 200px;
}
.logo {
  margin-top: 2rem;
  margin-left: 3rem;
  font-size: 1.2rem;
}
.sidebar__menu {
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;

}

.sidebar__menu--item {
  display: flex;
  align-items: center;
  padding: .5rem 1rem .5rem 1.5rem;
  transition: .3s ease;
  cursor: pointer;
  span {
    font-size: 1.1rem;
    font-weight: var(--fw-sm);
    margin-left: 1rem;
  }
  &:hover {
    transform: translateX(2px);
  }
}

</style>
