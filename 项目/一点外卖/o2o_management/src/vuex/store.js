import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    currentUser: null,
    isLogin: false,
    authorityList: [],
    menuChildArr: {
      menuChild1: false,
      menuChild2: false,
      menuChild3: false,
      menuChild4: false,
      menuChild5: false,
      menuChild6: false,
      menuChild7: false
    }
  },
  getters,
  mutations,
  actions
})
export default store
