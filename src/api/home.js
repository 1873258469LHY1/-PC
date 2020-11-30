import request from '@/utils/request' 

export const reqTypeNav = ()=>{
    return request({
        method:'GET',
        url:'/product/getBaseCategoryList',
    })
}
