import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/vincmgn/formation-vue3-api-composition',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getEvents = () => {
  return apiClient.get('/events')
}
const getEvent = (id: Number) => {
  return apiClient.get('/events/' + id)
}

export { getEvents, getEvent }
