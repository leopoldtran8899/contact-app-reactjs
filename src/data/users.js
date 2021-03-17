import axios from 'axios'

const userApi = 'https://jsonplaceholder.typicode.com/users'

export const getAll = async () => {
  return await axios.get(userApi).then(res => (res.data))
}