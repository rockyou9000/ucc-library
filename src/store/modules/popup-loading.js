import {
  SHOW_POPUP_LOADING,
  HIDE_POPUP_LOADING,
} from '../types';

const state = {
  content: '',
};

const actions = {
  showLoading({ commit }, content = '正在加载') {
    commit(SHOW_POPUP_LOADING, content);
  },
  hideLoading({ commit }) {
    commit(HIDE_POPUP_LOADING);
  },
};

const mutations = {
  [SHOW_POPUP_LOADING](state, action) {
    state.content = action;
  },
  [HIDE_POPUP_LOADING](state) {
    state.content = '';
  },
};

const getters = {
  loadContent: state => state.content,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
