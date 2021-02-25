import axios from 'axios'

const heroToken = '4617431915028854'

const api = axios.create({
    baseURL: `https://superheroapi.com/api/${heroToken}`
})

export default api