import { reqTypeNav, reqBanners,reqFloors } from "@api/home";


export default {
    state: {
        categorys: [],
        banners: [],
        floors:[]
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
        },
        async getFloors({ commit }) {
            const floors = await reqFloors();
            commit('GET_FLOORS', floors)
        }
    },
    mutations: {
        GET_TYPENAV(state, categorys) {
            state.categorys = categorys
        },
        GET_BANNERS(state, banners) {
            state.banners = banners
        },
        GET_FLOORS(state, floors) {
            state.floors = floors
        }
    }

}