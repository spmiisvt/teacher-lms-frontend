<template>
  <div class="subject__card">
    <div class="subject__inner">
      <h3 class="subject__cart--title">
        {{subject.title}}
      </h3>
      <h2>Занятия: {{ subject.qnt_tasks }}</h2>
    </div>


    <div class="control__items">
      <div>
        <i class='bx bx-sync bx-sm'></i>
      </div>
      <div>
        <i class='bx bx-plus-circle bx-sm'></i>
      </div>
     <div>
       <i class='bx bx-minus-circle bx-sm'></i>
     </div>
    </div>




  </div>
</template>

<script>
export default {
  name: "SubjectCard",
  props: {
    subject: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss">
.subject__inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 80%;
  h2 {
    color: var(--hi-primary);
    font-weight: 500;
  }
}
.subject__card {
  display: flex;
  justify-content: space-between;
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
.control__items {
  position: relative;
  display: block;
  div {
    border: 1px solid var(--fg-primary);
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 27px;
    height: 27px;
    cursor: pointer;
    transition: .3s ease;
    i {
      color: var(--hi-primary);
      transition: .3s ease;
    }
    &:hover {
      background: var(--hi-primary);
      i {
        color: var(--fg-primary);
      }
    }
  }
}

</style>
