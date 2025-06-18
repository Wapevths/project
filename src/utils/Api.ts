import axios from 'axios'

const access_token = 'your-token'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    withCredentials: false,
    headers: {
        'Authorization': `Client-ID ${access_token}`,
        'Content-Type': 'application/json;charset=utf-8',
    },
})
axios.defaults.baseURL = 'https://api.unsplash.com'
