import { reqTypeNav, reqBanners } from "@api/home";


export default {
    state: {
        categorys: [],
        banners: []
    },
    getters: {

    },
    actions: {
        async getTypeNav({ commit }) {
            const categorys = await reqTypeNav();
            commit('GET_TYPENAV', categorys)
        },
        async getBanners({ commit }) {
            const banners = await reqBanners();
            commit('GET_BANNERS', banners)
        }
    },
    mutations: {
        GET_TYPENAV(state, categorys) {
            state.categorys = categorys
        },
        GET_BANNERS(state, banners) {
            state.banners = banners
        }
    }

}