import {reqSku} from '@api/detail'
export default {
    state: {
        details:{
            categoryView:{},
            spuSaleAttrList:[],
            skuInfo:{}
        }
    },
    getters: {
        categoryView(state){
            return state.details.categoryView
        },
        spuSaleAttrList(state){
            return state.details.spuSaleAttrList
        },
        skuInfo(state){
            return state.details.skuInfo
        }
    },
    actions: {
        async getDetails({commit},goodsId){
            const details = await reqSku(goodsId)
            commit('GET_DETAILS',details)
        }
    },
    mutations: {
        GET_DETAILS(state,details){
            state.details = details
        }
    },
   

}