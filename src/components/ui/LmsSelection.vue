<template>
  <div class="selection animated zoomIn">
    <label>
      <input type="checkbox" name="placeholder">
      <span class="placeholder">{{placeholder}}</span>
      <label
        class="option isVisible"
        v-for="option in options"
        :key="option.id"
      >
        <input
          type="radio"
          name="option"
          v-model="selected"
          :value="option.id"
        >
        <span class="title animated fadeIn">{{option.name}}</span>
      </label>
    </label>
  </div>
</template>

<script>

export default {
  name: "LmsSelection",
  data() {
    return {
      selected: null,
    }
  },
  props: {
    placeholder: {
      type: String,
      default: "Выберете"
    },
    options: {
      type: Array,
      default: []
    },
  },
}
</script>

<style lang="scss">
.selection {
  position: relative;
  overflow: hidden;
  display: block;
  margin: auto;
  width: 250px;
  height: 100%;
  border-bottom: 0;
  border-radius: 3px;
  font-size: 1rem;
  box-shadow: 0 1em 2em -1.5em rgba(0, 0, 0, .5);
  .title,
  .placeholder {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 1.5em 2em;
    background: rgba(255, 255, 255, 1);
    border-top: 1px solid rgba(0, 0, 0, .05);
    cursor: pointer;
  }
  &>label>input {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0;
    cursor: pointer;
    &:checked {
      z-index: 2;
    }
    &:not(:checked) {
      ~label.option input:not(:checked)~.title {
        display: none!important;
      }
    }
    &:disabled {
      cursor: no-drop;
    }
  }
  & label>span.placeholder {
    position: relative;
    z-index: 0;
    display: inline-block;
    width: 100%;
    color: #999;
    border-top: 0;
  }
  label.option {
    display: block;
    overflow: hidden;
    z-index: 1;
    width: 100%;
    transition: all 1s ease-out;
    span.title {
      position: relative;
      z-index: 2;
      transition: background .3s ease-out;
      &:hover {
        color: #fff;
        background: rgba(146, 168, 209, .5);
        box-shadow: inset 0 1px 0 rgba(0, 0, 0, .1);
      }
    }
    input {
      display: none;
      &:checked~span.title {
        position: absolute;
        display: block;
        z-index: 1;
        top: 0;
        font-size: 1rem;
        background: #fff;
        border-top: 0;
        box-shadow: none;
        color: inherit;
        width: 100%;
      }
    }
  }
}

</style>
