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
  <RightSidebar>
    1234124124124
  </RightSidebar>
</template>

<script>
import SubjectCard from "@/components/SubjectCard";
import RightSidebar from "@/components/RightSidebar";
export default {
  name: "Subjects",
  components: {RightSidebar, SubjectCard}
}
</script>

<style lang="scss">
.subjects {
  padding: 2rem;
}
</style>
