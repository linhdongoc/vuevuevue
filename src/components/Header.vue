<template>
  <header>
    <div>
      <div>
        <router-link to="/" v-if="!signedIn()">Sign in</router-link>
        <router-link to="/signup" v-if="!signedIn()">Sign Up</router-link>
        <router-link to="/books" v-if="signedIn()">Books</router-link>
        <router-link to="/items" v-if="signedIn()">Items</router-link>
        <router-link to="/todo_lists" v-if="signedIn()">Todo Lists</router-link>
        <a href="#" @click.prevent="signOut" v-if="signedIn()">Sign out</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  created() {
    this.signedIn()
  },
  methods: {
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text
    },
    signedIn() {
      return localStorage.signedIn
    },
    signOut() {
      this.$http.secured
        .delete('/signin')
        // eslint-disable-next-line
        .then(response => {
          delete localStorage.csrf
          delete localStorage.signedIn
          this.$router.replace('/')
        })
        .catch(error => this.setError(error, 'Cannot sign out'))
    }
  }
}
</script>
