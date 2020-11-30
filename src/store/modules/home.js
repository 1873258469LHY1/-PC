import { reqTypeNav } from "@api/home";

export default {
    state: {
        categorys: [],
    },
    getters: {
        
    },
    actions: {
        async getTypeNav({commit}){
            const categorys = await reqTypeNav();
            commit('GET_TYPENAV',categorys)
        }
    },
    mutations: {
        GET_TYPENAV(state,categorys){
            state.categorys=categorys
        }
    },
}