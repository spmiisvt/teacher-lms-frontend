<template>
  <AttendanceCard />
  <AttendanceCard />
  <AttendanceCard />
  <AttendanceCard />
  <AttendanceCard />
  <AttendanceCard />
  <AttendanceCard />
  <AttendanceCard />

</template>

<script>

import AttendanceCard from "@/components/AttendanceCard";
export default {
  name: "Attendance",
  components: {AttendanceCard},
  data() {
    return {
      subjects: [
        {
          id: 1,
          name: "ЭВМиПУ",
        },
        {
          id: 2,
          name: "Программирование",
        },
        {
          id: 3,
          name: "ТИПИС",
        },
        {
          id: 4,
          name: "ТОИ",
        },
      ],
      groups: [
        {
          id: 1,
          name: 'ИАС-20'
        },
        {
          id: 2,
          name: "ИСТ-20",
        }
      ],
      selected: null,
    }
  }
}
</script>

<style lang="scss">

</style>
