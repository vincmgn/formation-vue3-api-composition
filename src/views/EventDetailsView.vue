<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getEvent } from '@/services/EventService'

interface Event {
  title: string
  time: string
  date: string
  location: string
  description: string
}

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})
const event = ref<Event | null>(null)
const isLoading = ref(true)

onMounted(() => {
  getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => console.log(error))
    .finally(() => {
      setTimeout(() => {
        isLoading.value = false
      }, 500)
    })
})
</script>

<template>
  <div v-if="event && !isLoading">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
</template>
