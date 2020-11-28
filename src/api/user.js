import request from '@utils/request'

export const reqLogin = (phone,password)=>{
    return request({
        method:'POST',
        url:'/user/passport/login',
        data:{
            phone,
            password
        }

    })
}

export const reqTypeNav = ()=>{
    return request({
        method:'GET',
        url:'/product/getBaseCategoryList',
    })
}