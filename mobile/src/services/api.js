import axios from 'axios';

const api = axios.create({
    baseURL: ' http://b9935e63.ngrok.io',
})

export default api;