import request from '@/utils/request' 

export const reqProduct = (data)=>{
    return request({
        method:'POST',
        url:'/list',
        data
    })
}