<template>
		<div>
<transition name="slide" mode="out-in">

	<div v-show="MENU_STATE"class="mobile-menu">
				<ul>
			<li>
				<a href="website__development" @click.prevent="onStart" class="nav-link home">Главная</a>
				</li>
			<li>
			<a href="full__support"  @click.prevent="onStart" class="nav-link">Поддержка</a>
				</li>
			<li>
				<a href="how__much"  @click.prevent="onStart"  class="nav-link">Цены</a>
				</li>
			<li>
			<a href="our__job"  @click.prevent="onStart"  class="nav-link activeThis active">Наши работы</a>
				</li>
			<li>
			<a href="contacts"  @click.prevent="onStart" class="nav-link cont">Контакты</a>
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
				<a href="website__development" @click.prevent="onStart" class="nav-link home">Главная</a>
				</li>
			<li class="nav-item">
			<a href="full__support"  @click.prevent="onStart" class="nav-link">Поддержка</a>
				</li>
			<li class="nav-item">
				<a href="how__much"  @click.prevent="onStart"  class="nav-link">Цены</a>
				</li>
			<li class="nav-item">
			<a href="our__job"  @click.prevent="onStart"  class="nav-link activeThis active">Наши работы</a>
				</li>
			<li class="nav-item">
			<a href="contacts"  @click.prevent="onStart" class="nav-link cont">Контакты</a>
				</li>
				</ul>
								<button class="order__website" id="buttonTop" @click="menuClick">Заказать сайт</button>
			</div>
		<button @click="menuClick" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"><span></span></span>
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
},
orderWebsite(){
	console.log('Заказать')
},
	onStart: function(e) {
		if(window.screen.width < 992){
			this.$store.dispatch('TOGGLE_MENU')
		}
		window.history.go(-1)
		setTimeout(() => {
		let link = e.target.getAttribute('href')
		let contacts = document.getElementById(link)
		contacts.scrollIntoView({block: "center",behavior: "smooth"})

},300)

    },

	},
}
</script>
<style>
	
</style>