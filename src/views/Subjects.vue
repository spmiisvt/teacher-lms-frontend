<template>
  <div class="subjects">
    <h1>Предметы</h1>
    <div class="container">
      <SubjectCard />
      <SubjectCard />
      <SubjectCard />
      <SubjectCard />
      <SubjectCard />
      <SubjectCard />
      <SubjectCard />
    </div>

  </div>

</template>

<script>
import SubjectCard from "@/components/SubjectCard";
export default {
  name: "Subjects",
  components: {SubjectCard}
}
</script>

<style lang="scss">

</style>
