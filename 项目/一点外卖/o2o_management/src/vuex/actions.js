export const setUser = ({commit}, user) => {
  commit('userStatus', user)
}
export const setAut = ({commit}, para) => {
  commit('setAuthority', para)
}
