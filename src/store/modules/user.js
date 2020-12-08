import { reqLoging, reqRegister } from "@api/user";


export default {
    state: {
        
        name: localStorage.getItem("name") || "",
        token: localStorage.getItem("token") || "",
    },
    getters: {

    },
    actions: {
        async getRegister({ commit }, { phone, password, code }) {

            await reqRegister({ phone, password, code });
            console.log(commit)
        },
        async getLoging({ commit }, { phone, password }) {
            const users = await reqLoging(phone, password);
            console.log(users)
            commit('GET_LOGING', users)
        },
    },
    mutations: {
        GET_LOGING(state, users) {
            state.name = users.name
            state.token = users.token
        },

    }

}