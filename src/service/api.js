import axios from 'axios'

const baseUrl = 'https://api.allorigins.win/raw?url=https://www.fruityvice.com';

const api = axios.create({
  baseURL: baseUrl,
})

export default api
