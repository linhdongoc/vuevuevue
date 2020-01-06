<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <h1>Dashboard</h1>
    <div v-if="isLoading">
      Loading events ...
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      isLoading: true,
      events: [],
      error: ''
    }
  },
  created() {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      this.$http.secured
        .get('/api/v1/events')
        .then(response => {
          this.events = response.data
          this.isLoading = false
        })
        .catch(error => this.setError(error, 'Something went wrong'))
    }
  },
  methods: {
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text
      this.isLoading = true
    }
  }
}
</script>
