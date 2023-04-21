export const catalogStore = {
  state: () => ({
    params: {},
    options: {},
    loadFilters: {},
    
    showContent: false,
    fooList: []
  }),
  mutations: {
    setParam(state, paramObj) {
      state.params[paramObj.name] = paramObj.val
      // console.log(state.params[paramObj.name]);
      // console.log(paramObj.val);
    },

    setParams(state, params = {}) {
      // если присваивать через "=" то теряется реактивность
      Object.assign(state.params, params)
    },

    deleteParam(state, param){
      delete state.params[param]
    },

    addFoo(state, foo) {
      state.fooList.push(foo)
    },

    setShowContent(state, boll) {
      const val = boll ? !!boll : !state.showContent
      state.showContent = val
    },
    setOptions(state, newOptions){
      // console.log(optionName);
      // state.btnParams[] = 
      Object.assign(state.options, newOptions)
    },
  },


  namespaced: true,
}