<template>
  <div>
    <div class="event-header">
      <h2 class="title">{{ event.title }}</h2>
      <p>Start {{ handleEventTermDate(event.term_start) }}</p>
      <p>End {{ handleEventTermDate(event.term_end) }}</p>
      <p>
        Organized by
        {{ event.organizers ? event.organizers.join(', ') : 'n.a' }}
      </p>
      <p>
        Categories:
        {{
          event.categories.length > 1
            ? event.categories.join(', ')
            : event.categories.toString()
        }}
      </p>
    </div>
    <BaseIcon name="map"><p>Location</p></BaseIcon>
    <address class="location">{{ event.location }}</address>
    <h3>Event details</h3>
    <p>{{ event.description }}</p>
    <h3>
      Attendees
      <span class="badge -fill-gradient">{{
        event.attendees ? event.attendees.length : 0
      }}</span>
    </h3>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in event.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      event: '',
      error: ''
    }
  },
  created() {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      this.$http.secured
        .get(`/api/v1/events/${this.id}`)
        .then(response => {
          this.event = response.data
        })
        .catch(error => this.setError(error, 'Something went wrong'))
    }
  },
  methods: {
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text
    },
    handleEventTermDate(value) {
      let d = new Date(value)
      return (
        d.getDate() +
        '/' +
        d.getMonth() +
        '/' +
        d.getFullYear() +
        ' - ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds()
      )
    }
  }
}
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
