<template>
  <div id="nav">
    <router-link to="/" class="brand">VUEVUEVUE</router-link>
    <nav>
      <router-link to="/" v-if="!signedIn()">Sign in</router-link>
      <router-link to="/signup" v-if="!signedIn()">Sign Up</router-link>
      <router-link to="/books" v-if="signedIn()">Books</router-link>
      <router-link to="/items" v-if="signedIn()">Items</router-link>
      <router-link to="/todo_lists" v-if="signedIn()">Todo Lists</router-link>
      <router-link :to="{ name: 'event-list' }" v-if="signedIn()"
        >Events</router-link
      >
      <router-link :to="{ name: 'event-create' }" v-if="signedIn()"
        >Create Event</router-link
      >
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
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav > .brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}

.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
