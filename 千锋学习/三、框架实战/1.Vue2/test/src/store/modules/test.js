const state = {
  num: 1,
}
const mutations = {
  ADD(state, val) {
    state.num += val
  },
}
const actions = {
  add(context, val) {
    context.commit('ADD', val)
    console.log('context:', context)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
