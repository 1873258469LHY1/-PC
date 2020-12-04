import request from '@utils/request'

export const reqSku =(goodsId)=>{
    return request({
        method:'GET',
        url:`/item/${goodsId}`,
    })
}