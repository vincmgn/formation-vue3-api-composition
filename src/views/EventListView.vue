<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'

import { ref, onMounted } from 'vue'

const events = ref(null)

onMounted(() => {
  fetch('https://github.com/typicode/demo/blob/main/db.json')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
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
