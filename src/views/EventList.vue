<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <h1>Events</h1>
    <h3>Add an Event</h3>
    <EventCreate />
    <hr />
    <h3>List all events</h3>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue'
import EventCreate from './EventCreate'

export default {
  name: 'event',
  components: { EventCard, EventCreate },
  data() {
    return {
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
        })
        .catch(error => this.setError(error, 'Something went wrong'))
    }
  },
  methods: {
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text
    }
  }
}
</script>

<style scoped></style>
