import axios from 'axios'

const heroToken = '4617431915028854'

const api = axios.create({
    // .php dps do api resolve o problema de CORS
    baseURL: `https://superheroapi.com/api.php/${heroToken}`
})

export default api