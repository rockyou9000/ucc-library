import {
  MODAL_SHOW,
  MODAL_HIDE,
} from '../types';

const state = {
  show: false,
};

const actions = {
  showModal({ commit }) {
    commit(MODAL_SHOW);
  },
  hideModal({ commit }) {
    commit(MODAL_HIDE);
  },
};

const mutations = {
  [MODAL_SHOW](state) {
    state.show = true;
  },
  [MODAL_HIDE](state) {
    state.show = false;
  },
};

const getters = {
  isModalShow: state => state.show,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
