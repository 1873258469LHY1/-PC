import { reqGetShopList, 
    reqAddShopList, 
    // reqCheckShopList, 
    // reqDelShopList 
} from "@api/shopCart";


export default {
    state: {
        shopCartList: []
    },
    getters: {

    },
    actions: {
        // 请求获取购物车所有数据
        async getShopList({ commit }) {
            const shopCartList = await reqGetShopList();
            commit('GET_SHOPLIST', shopCartList)
        },
        // 1. 手动更新vuex的数据 --> 页面就会重新渲染
        // 2. 重新请求所有购物车数据
        async addShopList({ commit }, { skuId, skuNum }) {
            await reqAddShopList(skuId, skuNum);
            // commit('ADD_SHOPLIST', { skuId, skuNum })
            console.log(commit)
        },

        // async checkShopList({ commit }, { skuID, isChecked }) {
        //     const shopCartList = await reqCheckShopList(skuID, isChecked);
        //     commit('CHECK_SHOPLIST', shopCartList)
        // },
        // async delShopList({ commit }, skuId) {
        //     const shopCartList = await reqDelShopList(skuId);
        //     commit('DEL_SHOPLIST', shopCartList)
        // },

    },
    mutations: {
        GET_SHOPLIST(state, shopCartList) {
            state.shopCartList = shopCartList
        },
        // ADD_SHOPLIST(state, shopCartList) {
        //     state.shopCartList = shopCartList
        // },
        // CHECK_SHOPLIST(state, shopCartList) {
        //     state.shopCartList = shopCartList
        // },
        // DEL_SHOPLIST(state, shopCartList) {
        //     state.shopCartList = shopCartList
        // },

    }

}