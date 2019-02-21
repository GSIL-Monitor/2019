export const userStatus = (state, user) => {
  if (user) {
    state.currentUser = user
    state.isLogin = true
  } else if (user == null) {
    sessionStorage.setItem('username', null)
    state.currentUser = null
    state.isLogin = false
  }
}
export const setAuthority = (state, list) => {
  state.authorityList = list
}
export const clear = (state) => {
  state.currentUser = null
  state.isLogin = false
}
