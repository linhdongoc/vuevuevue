<template>
  <div id="nav">
    <router-link to="/" class="brand">Home</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <nav>
      <router-link to="/signin" v-if="!signedIn()">Sign in</router-link>
      <router-link to="/signup" v-if="!signedIn()">Sign Up</router-link>
      <router-link to="/books" v-if="signedIn()">Books</router-link>
      <router-link to="/items" v-if="signedIn()">Items</router-link>
      <router-link to="/todoLists" v-if="signedIn()">Todo Lists</router-link>
      <router-link to="/events" v-if="signedIn()">Events</router-link>
      <a href="#" @click.prevent="signOut" v-if="signedIn()">Sign out</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  padding: 0.2em 1em;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}

.nav-welcome {
  margin-left: auto;
  margin-right: 1rem;
  color: white;
}

a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
}

.router-link-exact-active {
  color: white;
  border-bottom: 2px solid #fff;
}

button,
.button {
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #2c3e50;

  &.router-link-active {
    color: #2c3e50;
  }
}

.logoutButton {
  cursor: pointer;
}

.nav-welcome + button {
  margin-left: 0;
}
</style>
