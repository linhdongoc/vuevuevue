<template>
  <div>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"></EventCard>
    <template v-if="currentPage !== 1">
      <router-link :to="{ name: 'event-list', query: { currentPage: currentPage - 1 }}" rel="prev">
        Prev Page
      </router-link>
      <template v-if="hasNextPage">&nbsp; | &nbsp;</template>
    </template>
    <router-link v-if="hasNextPage" :to="{ name: 'event-list', query: { currentPage: currentPage + 1 }}" rel="next">
      Next Page
    </router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: 3,
      currentPage: this.currentPage
    })
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.query.currentPage) || 1
    },
    hasNextPage() {
      return this.event.eventsTotal > this.currentPage * this.perPage
    },
    ...mapState(['event', 'user'])
  }
}
</script>

<style scoped>
</style>
