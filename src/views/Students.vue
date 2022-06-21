<template>
  <div class="students">
    <h1>Студенты</h1>

    <div class="container">
      <LmsTable
        :users_data="students"
        :headers="headers"
      />
    </div>
  </div>
  <RightSidebar>
    wefwfwefwe
  </RightSidebar>
</template>

<script>
import LmsTable from "@/components/ui/table/LmsTable";
import RightSidebar from "@/components/RightSidebar";
export default {
  name: "Students",
  components: {RightSidebar, LmsTable},
  data() {
    return {
      headers: ["ФИО", "Email", "Группа"],
      students: [
        {
          id: "1",
          name: "Смирнов Артем Иванович",
          email: "test@test.ru",
          group_name: "ИАС-20-1"
        },
        {
          id: "2",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        },
        {
          id: "3",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        },
        {
          id: "4",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        },
        {
          id: "5",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        },
        {
          id: "6",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        },
        {
          id: "7",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        },
        {
          id: "8",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        },
        {
          id: "9",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        },
        {
          id: "10",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        },
        {
          id: "11",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        },
        {
          id: "12",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        },
        {
          id: "13",
          name: "Лутонин Александр Сергеевич",
          email: "test2@test.ru",
          group_name: "ИАС-21-1"
        }
      ]
    }
  },



}
</script>

<style lang="scss">
.students {
  padding: 2rem;
}


</style>
