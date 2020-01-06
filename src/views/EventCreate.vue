<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <form @submit.prevent="addEvent">
      <label>Select a category</label>
      <select v-model="newEvent.categories">
        <option disabled>Select a category</option>
        <option v-for="category in categories" :key="category">{{
          category
        }}</option>
      </select>
      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="newEvent.title"
          type="text"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="newEvent.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="newEvent.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Term Start</label>
        <flat-pickr
          v-model="newEvent.term_start"
          placeholder="Select Datetime"
          :config="flatPickrConfig"
        />
      </div>
      <div class="field">
        <label>Term End</label>
        <flat-pickr
          v-model="newEvent.term_end"
          placeholder="Select Datetime"
          :config="flatPickrConfig"
        />
      </div>
      <div class="field">
        <label>Select an Organizer</label>
        <select v-model="newEvent.organizer_ids">
          <option disabled>Select an organizer</option>
          <option :value="user.id" v-for="user in users" :key="user.id">{{
            user.email
          }}</option>
        </select>
      </div>
      <div class="field">
        <label>Select an Attendee</label>
        <select v-model="newEvent.attendee_ids">
          <option disabled>Select an attendee</option>
          <option :value="user.id" v-for="user in users" :key="user.id">{{
            user.email
          }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Save" />
    </form>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'

export default {
  components: { flatPickr },
  data() {
    return {
      categories: this.$store.state.categories,
      newEvent: [],
      events: [],
      users: [],
      error: '',
      flatPickrConfig: {
        wrap: true,
        enableTime: true,
        dateFormat: 'd-m-Y H:i',
        time_24hr: true
      }
    }
  },
  created() {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      this.$http.secured
        .get('/api/v1/users')
        .then(response => {
          this.users = response.data
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
    addEvent() {
      const value = this.newEvent
      if (!value) {
        return
      }
      this.$http.secured
        .post('/api/v1/events/', {
          event: {
            title: this.newEvent.title,
            description: this.newEvent.description,
            location: this.newEvent.location,
            term_start: this.newEvent.term_start,
            term_end: this.newEvent.term_end,
            categories: this.newEvent.categories,
            organizer_ids: [this.newEvent.organizer_ids],
            attendee_ids: [this.newEvent.attendee_ids]
          }
        })
        .then(response => {
          this.events.push(response.data)
          this.newEvent = ''
        })
        .catch(error => this.setError(error, 'Cannot create book'))
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
