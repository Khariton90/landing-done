<template>
		<div>
<transition name="slide" mode="out-in">

	<div v-show="MENU_STATE"class="mobile-menu">
				<ul>
<li
v-for="item of MENU_ITEM"
:data="item.link"
@click="menuClickHome">{{ item.item }}
</li>
				</ul>
	</div>
 </transition>
					<header id="main">
	<nav class="navbar navbar-expand-lg navbar-light bg-light active">
		<div class="container">
		<a class="navbar-brand" href="#"><img src="../assets/logo.svg" alt="" width="141px"></a>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			<li class="nav-item" v-for="(item,index) of MENU_ITEM">
				<span :data="item.link" class="nav-link home" :class="{active: index == 3}" @click="home">{{ item.item }}</span>
				</li>
				</ul>
	<button class="order__website" id="buttonTop" 
	@click="orderWebsite">Заказать сайт
	</button>
			</div>
		<button @click="menuClick" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon" :class="{active: MENU_STATE}"><span></span></span>
		</button>
		</div>
	</nav>
</header>
</div>
</template>

<script>
	import {mapGetters} from "vuex"
	export default{
props: ['menuList'],
data(){
	return{
			menu:false,
menuItems: [
'Главная',
'Поддержка',

]
	}
},
computed:{
...mapGetters([
'MENU_STATE',
'MENU_ITEM'
	])
},
methods:{
menuClick(){
		this.$store.dispatch('TOGGLE_MENU')
		if(document.body.classList.contains('lock')){
			document.body.classList.remove('lock')
		}else{
			document.body.classList.add('lock')
		}

},
menuClickHome(e){
		if(document.body.classList.contains('lock')){
			document.body.classList.remove('lock')
		}else{
			document.body.classList.add('lock')
		}
		this.$store.dispatch('TOGGLE_MENU')
		this.$router.push('/')
	let link = e.target.getAttribute('data')
	link = link.substr(1)
	let stores = this.$store.getters.MENU_ITEM
for(let i = 0; i < stores.length; i++){
	if(link == stores[i].link.substr(1)){
		this.$router.push('/')
			setTimeout(function(){
			let sections = document.getElementsByTagName('section')
			let footer = document.getElementsByTagName('footer')
		sections.forEach((section,index) => {
			if(section.id === link){
				section.scrollIntoView({behavior: 'smooth'})
			}else if(footer[0].id === link){
				footer[0].scrollIntoView({behavior: 'smooth'})
			}
		})
	},500)
	}
	}
},
orderWebsite(e){

},
home(e){
	let link = e.target.getAttribute('data')
		link = link.substr(1)
	let stores = this.$store.getters.MENU_ITEM
for(let i = 0; i < stores.length; i++){
	if(link == stores[i].link.substr(1)){
		this.$router.push('/')
			setTimeout(function(){
			let sections = document.getElementsByTagName('section')
			let footer = document.getElementsByTagName('footer')
		sections.forEach((section,index) => {
			if(section.id === link){
				section.scrollIntoView({behavior: 'smooth'})
			}else if(footer[0].id === link){
				footer[0].scrollIntoView({behavior: 'smooth'})
			}
		})
	},500)
	}
}
}
},
}
</script>
<style>
	.nav-link{
		cursor:pointer;
	}
</style>