<template>
  <div class="login">
    <div class="login-form">
      <form action="/dashboard" class="form">
        <h1 class="form__title">Teacher LMS</h1>
        <div class="form__div">
          <input type="text" class="form__input" placeholder=" " v-model="email.value">
          <label class="form__label">Email</label>
        </div>
        <div class="form__div">
          <input type="password" class="form__input" placeholder=" " v-model="password">
          <label class="form__label">Пароль</label>
        </div>
        <input type="submit" class="form__button" value="Войти">
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      password: "",
      email: {
        value: "",
        valid: true
      },
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
.login {
  width: 400px;
  margin: auto;
}
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 100%;
  padding: 2rem;

}
.form__title {
  margin-bottom: 3rem;
  color: var(--hi-secondary);
}

.form__div {
  position: relative;
  height: 48px;
  margin-bottom: 1.5rem;
}
.form__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: var(--sp-base);
  border: 1px solid var(--hi-primary);
  color: var(--bg-secondary);
  border-radius: .5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
  &:focus {
    border: 2px solid var(--hi-primary);
  }
}
.form__label {
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 .25rem;
  background-color: var(--bg-primary);
  color: var(--bg-secondary);
  font-size: var(--sp-base);
  transition: .3s;
}
.form__button {
  display: block;
  margin-left: auto;
  padding: .75rem 2rem;
  outline: none;
  border: none;
  background-color: var(--hi-primary);
  color: var(--bg-primary);
  font-size: var(--sp-base);
  cursor: pointer;
  transition: .3s;
  &:hover {
    box-shadow: 0 10px 36px rgba(0,0,0,.15);
    background-color: var(--hi-secondary);
  }
}
.form__input:focus + .form__label {
  top: -.5rem;
  left: .8rem;
  color: var(--hi-secondary);
  font-size: .9rem;
  z-index: 10;
}
.form__input:not(:placeholder-shown).form__input:not(:focus)+.form__label {
  top: -.5rem;
  left: .8rem;
  font-size: .9rem;
  z-index: 10;
}
</style>
