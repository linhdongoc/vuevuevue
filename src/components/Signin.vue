<template>
  <div>
    <div>
      <h3>Sign In</h3>
      <form @submit.prevent="signin">
        <div v-if="error">{{ error }}</div>
        <div>
          <label for="email" class="label">E-Mail</label>
          <input
            v-model="email"
            id="email"
            type="email"
            class="input"
            placeholder="user@example.de"
          />
        </div>
        <div>
          <label for="password" class="label">Password</label>
          <input
            type="password"
            v-model="password"
            class="input"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit">Sign In</button>
        <div>
          <router-link to="/signup">Sign up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  created() {
    this.checkSignedIn()
  },
  updated() {
    this.checkSignedIn()
  },
  methods: {
    signin() {
      this.$http.plain
        .post('/signin', { email: this.email, password: this.password })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error))
    },
    signinSuccessful(response) {
      if (!response.data.csrf) {
        this.signinFailed(response)
        return
      }
      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/books')
    },
    signinFailed(error) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        'Something went wrong'
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkSignedIn() {
      if (localStorage.signedIn) {
        this.$router.replace('/books')
      }
    }
  }
}
</script>
