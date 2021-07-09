import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    SET_LOADING_STATE(state, type) {
      state.loading = type;
    },
    SET_USER_INFO(state, credentials) {
      state.token = credentials.token;
      state.user = credentials.user;
      sessionStorage.setItem("setResponse", JSON.stringify(credentials));
      state.isUserLoggedIn = true;
    },
    RELOAD_USER_DATA(state, credentials) {
      state.token = credentials.token;
      state.user = credentials.user;
      state.isUserLoggedIn = true;
    },
    CLEAR_USER_DATA(state) {
      state.token = null;
      state.user = null;
      state.isUserLoggedIn = false;
      sessionStorage.removeItem("setResponse");
    },
  },
  actions: {
    setLoading({ commit }, type) {
      commit("SET_LOADING_STATE", type);
    },
    login({ commit }, credentials) {
      commit("SET_USER_INFO", credentials);
    },
    reloadUserData({ commit }, credentials) {
      commit("RELOAD_USER_DATA", credentials);
    },
    logout({ commit }) {
      commit("CLEAR_USER_DATA");
    },
  },
  getters: {},
  modules: {},
});
