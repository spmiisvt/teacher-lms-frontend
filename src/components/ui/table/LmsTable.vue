<template>
  <div class="lms-table">
    <div class="table__content">
      <div class="lms-table__header">
        <p v-for="header in headers"
           :key="header"
        >{{header}}</p>

      </div>
      <div class="lms-table__body">
        <div class="body-row">
          <LmsTableRow
            v-for="row in paginatedUsers"
            :key="row.id"
            :row_data="row"
          />
        </div>
      </div>
    </div>

    <div class="lms-table__pagination">
      <div class="page"
        v-for="page in pages"
           :key="page"
           @click="pageClick(page)"
           :class="{pageSelected: page === pageNumber}"
      >
        {{page}}
      </div>
    </div>
  </div>
</template>

<script>
import LmsTableRow from "@/components/ui/table/LmsTableRow";
export default {
  name: "LmsTable",
  components: {LmsTableRow},
  data() {
    return {
      usersPerPage: 10,
      pageNumber: 1,
    }
  },
  props: {
    users_data: {
      type: Array,
      default: []
    },
    headers: {
      type: Array,
      default: []
    }
  },
  computed: {
    pages() {
        return Math.ceil(this.users_data.length / 10)
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users_data.slice(from, to)
    }
  },
   methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByName() {
      this.users_data.sort((a,b) => a.name.localeCompare(b.name))
    },
   }
}
</script>

<style lang="scss">
.lms-table {
  width: 100%;
  height: 590px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.lms-table__header {
  display: flex;
  justify-content: space-around;
  background: var(--hi-success);
  padding: 1rem .5rem;
  border-radius: 10px 10px 0 0;
  p {
    display: flex;
    flex-basis: 33%;
    font-weight: 600;
  }
}
.lms-table__body {
  margin-top: 1.5rem;
}
.lms-table__pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}
.page {
  padding: .5rem;
  border: 1px solid var(--hi-primary);
  cursor: pointer;
  transition: .3s ease;
  &:hover {
    background: var(--hi-primary);
    color: var(--fg-primary)
  }
}
.pageSelected {
  background: var(--hi-secondary);
}
</style>
