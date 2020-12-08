//获取购物车所有列表数据
import request from '@/utils/request'

export const reqGetShopList = () => {
    return request({
        method: 'GET',
        url: '/cart/cartList',
    })
}
//添加、减少购物车商品数量

export const reqAddShopList = (skuId,skuNum) => {
    return request({
        method: 'POST',
        url: `/cart/addToCart/${ skuId }/${ skuNum }`,
    })
}
//切换选中商品的状态

export const reqCheckShopList = (skuID,isChecked) => {
    return request({
        method: 'GET',
        url: `/cart/checkCart/${skuID}/${isChecked}`,
    })
}
//删除购物车商品

export const reqDelShopList = (skuId) => {
    return request({
        method: 'DELETE',
        url: `/cart/deleteCart/${skuId}`,
    })
}

