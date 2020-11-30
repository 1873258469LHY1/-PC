import request from '@/utils/request' 
import mockRequest  from '@/utils/mockRequest '

export const reqTypeNav = ()=>{
    return request({
        method:'GET',
        url:'/product/getBaseCategoryList',
    })
}

// 模拟数据
export const reqBanners = ()=>{
    return mockRequest({
        method:'GET',
        url:'/banners',
    })
}
export const reqFloors = ()=>{
    return mockRequest({
        method:'GET',
        url:'/floors',
    })
}
