<template>
    <SubjectCard
      v-for="subject in subjects"
      :key="subject.id"
      :subject="subject"
    />
  <RightSidebar>
    1234124124124
  </RightSidebar>
</template>

<script>
import SubjectCard from "@/components/SubjectCard";
import RightSidebar from "@/components/RightSidebar";
export default {
  name: "Subjects",
  components: {RightSidebar, SubjectCard},
  data() {
    return {
      subjects: [
        {
          id: 1,
          title: "Технологии обработки информации",
          groups: ["ИАС-20", "ИСТ-20-1"],
          qnt_tasks: 10
        },
        {
          id: 2,
          title: "ЭВМ и Перефирийные устройства",
          groups: ["ИАС-20", "ИСТ-20-1"],
          qnt_tasks: 9
        },
        {
          id: 3,
          title: "Программирование",
          groups: ["ИСТ-21-1", "ИСТ-21-2"],
          qnt_tasks: 8
        },
        {
          id: 4,
          title: "Базы данных",
          groups: ["ИАС-19"],
          qnt_tasks: 12
        },
        {
          id: 5,
          title: "Операционные системы",
          groups: ["ИАС-20", "ИСТ-20-1"],
          qnt_tasks: 6
        },
        {
          id: 6,
          title: "Управление данными",
          groups: ["МТ-21", "МП-20"],
          qnt_tasks: 7
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
