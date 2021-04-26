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
			<li class="nav-item">
				<router-link 
				to="/#website__development" 
				class="nav-link home">Главная
				</router-link>
				</li>
			<li class="nav-item">
			<router-link 
			to="/#full__support" 
			class="nav-link">Поддержка
			</router-link>
				</li>
			<li class="nav-item">
				<router-link 
				to="/#how__much" 
				class="nav-link">Цены
				</router-link>
				</li>
			<li class="nav-item">
			<router-link 
			to="/#our__job"
			class="nav-link active">
			Наши работы
			</router-link>
				</li>

			<li class="nav-item">
			<router-link to="/#contacts" class="nav-link cont">
    Контакты
</router-link>
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
data(){
	return{
			menu:false,

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
		this.$router.push('/'+ `${e.target.getAttribute('data')}`)
},
orderWebsite(){
	alert('Заказать')
},
	onStart: function(e) {
		if(window.screen.width < 992){
					this.$store.dispatch('TOGGLE_MENU')
		if(document.body.classList.contains('lock')){
			document.body.classList.remove('lock')
		}else{
			document.body.classList.add('lock')
		}
		}
    },

	},
}
</script>
<style>
	
</style>