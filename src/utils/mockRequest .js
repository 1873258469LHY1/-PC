import axios from 'axios'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { Message } from 'element-ui'

const instance = axios.create({
    baseURL: '/mock',
    // header:{

    // }
})
// 请求拦截器
instance.interceptors.request.use((config) => {
    NProgress.start()
    return config
})
// 响应拦截器
instance.interceptors.response.use((res) => {
    // 进度条
    NProgress.done()
    const { message, data } = res.data
    if (res.data.code === 200) {
        return data
    }
    // 错误弹窗提示
    Message.error(message)
    return Promise.reject(message)
}, (err) => {
    NProgress.done()
    const message = err.message || "网络错误";
    Message.error(message)
    return Promise.reject(message)
})

export default instance