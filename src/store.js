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
},
			],
				carts: [
{
	id:1,
	title: 'Мастерская на дому',
	about: 'наращивание ресниц,<br> шитьё, массаж, ремонт<br> техники или уборка...',
	isActive: false,
	name: 'workshop',
},
{
	id:2,
	title: 'Автомастерская',
	about: '',
	isActive: false,
	name: 'garage',
},
{
	id:3,
	title: 'Личный тренер',
	about: '',
	isActive: false,
	name: 'coach',
},
{
	id:4,
	title: 'Курсы',
	about: '',
	isActive: false,
	name: 'courses',
},
{
	id:5,
	title: 'Продажа товара',
	about: '',
	isActive: false,
	name: 'sales',
},
{
	id:6,
	title: 'Для творчества',
	about: '',
	isActive: false,
	name: 'creative',
},
{
	id:7,
	title: 'Строительство<br> и инженерия',
	about: '',
	isActive: false,
	name: 'engineering',
},
{
	id:8,
	title: 'Красота и здоровье',
	about: '',
	isActive: false,
	name: 'beauty',
},
{
	id:9,
	title: 'Продвижение чего-либо',
	about: '',
	isActive: false,
	name: 'promotion',
},
				],
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
CART_ITEMS(state){
	return state.carts
}
}
})

export default store;