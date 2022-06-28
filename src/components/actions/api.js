import axios from 'axios'

const api = axios.create({
baseURL: 'https://tms-js-pro-back-end.herokuapp.com/api/beverage',
})

api.setup = key => {
api.defaults.headers.Authorization = `Token ${key}`
}

export default api