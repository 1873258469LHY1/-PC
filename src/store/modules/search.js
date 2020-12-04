import { reqProduct } from "@api/search";


export default {
    state: {
        productList: {}
    },
    getters: {
        trademarkList(state) {
            return state.productList.trademarkList
        },
        attrsList(state) {
            return state.productList.attrsList
        },
        goodsList(state) {
            return state.productList.goodsList
        }
    },
    actions: {
        async getProduct({ commit }, data = {}) {
            
            const productList = await reqProduct(data);
            commit('GET_PRODUCT', productList)
        }
    },
    mutations: {
        GET_PRODUCT(state, productList) {
            state.productList = productList
        },

    }

}