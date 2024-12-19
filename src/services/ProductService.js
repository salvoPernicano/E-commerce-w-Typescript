import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com/products',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getProducts(offset, limit = 10) {
    return apiClient.get(`?limit=${limit}&skip=${offset}`)
  },
  getProductDetails(id) {
    return apiClient.get('/' + id)
  },
}
