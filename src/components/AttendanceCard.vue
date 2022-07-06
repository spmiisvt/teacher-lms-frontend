<template>
    <div class="attendance__card animated zoomIn">
      <div class="attendance__inner">
        <h2 class="attendance__card--title">
          ЭВМ и Перефирийные устройства
        </h2>
        <div class="card-line"></div>
        <div class="attendance__groups">
          <LmsButton>ИАС-20-1</LmsButton>
          <LmsButton>ИАС-20-2</LmsButton>
        </div>
      </div>
    </div>
</template>

<script>
import LmsButton from "@/components/ui/LmsButton";
export default {
  name: "AttendanceCard",
  components: {LmsButton}

}
</script>

<style lang="scss">
.attendance__card {
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 300px;
  border-radius: 1rem;
  padding: .9rem;
  .attendance__card--title {
    position: relative;
    color: var(--hi-primary);
    font-size: 1.3rem;
    font-weight: 400;
  }
  .card-line {
    width: 20%;
    height: 2px;
    background-color: var(--hi-primary);
    margin: 1rem 0;
  }
}
.attendance__inner {
  display: flex;
  flex-direction: column;
}
.attendance__groups {
  display: flex;
  width: 100%;
  gap: 1.5rem;
  flex-wrap: wrap;
}
</style>
