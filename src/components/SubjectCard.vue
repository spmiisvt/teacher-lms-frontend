<template>
  <div class="subject__card">
     <h3 class="subject__cart--title">
       ЭВМ и Переферийные устройства
     </h3>
  </div>
</template>

<script>
export default {
  name: "SubjectCard"
}
</script>

<style lang="scss">
.subject__card {
  background-color: white;
  width: 250px;
  height: 125px;
  border-radius: 1rem;
  padding: .9rem;
  .subject__cart--title {
    color: rgba(84, 84, 140, 0.8);
    font-size: 1rem;
    font-weight: 400;
  }
}
</style>
