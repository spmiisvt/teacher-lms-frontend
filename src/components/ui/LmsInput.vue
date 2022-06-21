<template>
  <div class="form__group field">
    <input type="text" class="form__field" placeholder="Name" name="name" id='name' required />
    <label for="name" class="form__label">Name</label>
  </div>
</template>

<script>
export default {
  name: "LmsInput"
}
</script>

<style lang="scss">

.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 2rem;
  width: 100%;
}
.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid var(--fg-primary);
  outline: 0;
  font-size: 1rem;
  color: var(--fg-primary);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  font-weight: 400;
  color: var(--fg-primary);
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    font-weight: 400;
    color: var(--fg-primary);
  }
  padding-bottom: 6px;
  font-weight: 400;
  border-width: 3px;
  border-image: linear-gradient(to right, var(--bg-root),var(--bg-root));
  border-image-slice: 1;
}
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}

</style>
