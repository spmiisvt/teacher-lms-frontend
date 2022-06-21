<template>
  <div class="form__group">
    <button class="btn">Подтвердить</button>
  </div>
</template>

<script>
export default {
  name: "LmsButton"
}
</script>

<style lang="scss">
.btn {
  display: block;
  font-family: inherit;
  background: #57D9AD;
  color: var(--bg-primary);
  cursor: pointer;
  font-size: 1.1rem;
  padding: 1rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 5px;
  width: auto;
  position: relative;

  &:hover {
    background: var(--hi-primary);
    transition: all 0.5s;
    border-radius: 5px;
    color: var(--bg-primary);
  }


}
</style>
