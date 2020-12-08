import axios from 'axios'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { Message } from 'element-ui'

import store from '../store/index'
const instance = axios.create({
    baseURL: '/api',
    // header:{

    // }
})

instance.interceptors.request.use((config) => {
    NProgress.start()

    const token = store.state.user.token;
		if (token) {
			config.headers.token = token;
		}
    return config
})

instance.interceptors.response.use((res) => {
    NProgress.done()
    const { message, data } = res.data
    if (res.data.code === 200) {
        return data
    }
    Message.error(message)
    return Promise.reject(message)
}, (err) => {
    NProgress.done()
    const message = err.message || "网络错误";
    Message.error(message)
    return Promise.reject(message)
})

export default instance