<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { getEvents } from '@/services/EventService'
import { ref, onMounted } from 'vue'

interface Event {
  id: number
}

let events = ref<Event[]>([])

onMounted(() => {
  getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => console.log(error))
})
</script>

<template>
  <h1>Event For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
