import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
state: {
menu: false,
			menuItem: [
{
item: 'Главная',
link: '#website__development'
},
{
item: 'Поддержка',
link: '#full__support'
},
{
item: 'Цены',
link: '#how__much'
},
{
item: 'Наши Работы',
link: '#our__job'
},
{
item: 'Контакты',
link: '#contacts'
}]
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
},
MENU_ITEM(state){
	return state.menuItem
},
}
})

export default store;