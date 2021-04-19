import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
state: {
menu: false,
},
mutations:{
CHANGE_MENU:(state) => {
	state.menu = !state.menu
}
},
actions:{
TOGGLE_MENU({commit}){
	commit('CHANGE_MENU')
}
},
getters:{
MENU_STATE(state){
	return state.menu
}
}
})

export default store;