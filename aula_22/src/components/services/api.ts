import axios from 'axios'

const apiTodos = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export { apiTodos }