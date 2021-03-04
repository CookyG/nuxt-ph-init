const state = () => ({
  loading: false
});

const mutations = {
  setLoading(state, data) {
    state.loading = data;
  }
};

const actions = {
  setLoading: ({ commit }, data) => {
    commit("setLoading", data);
  }
};

const getters = {
  getLoading: state => {
    return state.loading;
  }
};

export { state, mutations, actions, getters };
