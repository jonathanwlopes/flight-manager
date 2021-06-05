import axios from 'axios'

const baseURL = 'https://flight-manager-server.herokuapp.com'

const instance = axios.create({
    baseURL,
})

async function api(url) {
    const { data } = await instance(url)
    return data
}
export default api
