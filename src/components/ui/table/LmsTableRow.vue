<template>
  <div class="lms-table-row">
    <div class="row__name row-text">{{row_data.name}}</div>
    <div class="row__email row-text">{{row_data.email}}</div>
    <div class="row__group row-text">{{row_data.group_name}}</div>
  </div>
</template>

<script>
export default {
  name: "LmsTableRow",
  props: {
    row_data: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss">
.lms-table-row {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid var(--hi-primary);
}
.row-text {
  flex-basis: 33%;
  padding: 1rem 1rem;
}
</style>
