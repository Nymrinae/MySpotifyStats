import { GetterTree, ActionTree, MutationTree } from 'vuex'

const state = () => ({
  topArtistsState: 'long',
  topTracksState: 'long',
  activePlaylist: {}
})

type RootState = ReturnType<typeof state>

const getters: GetterTree<RootState, RootState> = {
  topArtistsState: state => state.topArtistsState,
  topTracksState: state => state.topTracksState,
  activePlaylist: state => state.activePlaylist
}

const mutations: MutationTree<RootState> = {
  setTopArtistsState: (state, topArtistsState: string) => state.topArtistsState = topArtistsState,
  setTopTracksState: (state, topTracksState: string) => state.topTracksState = topTracksState,
  setActivePlaylist: (state, playlist: PlaylistT) => state.activePlaylist = playlist
}

const actions: ActionTree<RootState, RootState> = {
}

export {
  state,
  getters,
  mutations,
  actions
}