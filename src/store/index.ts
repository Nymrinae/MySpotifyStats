import { GetterTree, ActionTree, MutationTree } from 'vuex'

const state = () => ({
    isLogged: false
})

type RootState = ReturnType<typeof state>

const getters: GetterTree<RootState, RootState> = {
    isLogged: (state) => state.isLogged
}

const mutations: MutationTree<RootState> = {
    setLoggedState: (state) => state.isLogged = !state.isLogged
}

const actions: ActionTree<RootState, RootState> = {
}

export {
    state,
    getters,
    mutations,
    actions
}