<template>
	<div>
	<transition name="slide" mode="out-in">

	<div v-show="MENU_STATE"class="mobile-menu">
		<ul>
			<li @click="menuClick" v-for="item of MENU_ITEM" v-scroll-to="item.link">
				<a class="nav-lin">{{item.item}}</a>
				
			</li>
		</ul>
	</div>
 </transition>
					<header id="main">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container">
		<a class="navbar-brand" href="#"><img src="../assets/logo.svg" alt="" width="141px"></a>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			<li class="nav-item">
			<a class="nav-link home active" v-scroll-to="'#website__development'">Главная</a>
				</li>
			<li class="nav-item">
			<a class="nav-link"  v-scroll-to="'#full__support'">Поддержка</a>
				</li>
			<li class="nav-item">
			<a  class="nav-link" v-scroll-to="'#how__much'">Цены</a>
				</li>
			<li class="nav-item">
			<a  class="nav-link" v-scroll-to="'#our__job'">Наши работы</a>
				</li>
			<li class="nav-item">
			<a  class="nav-link cont" v-scroll-to="'#contacts'">Контакты</a>
				</li>
				</ul>
								<button class="order__website" id="buttonTop">Заказать сайт</button>
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
    export default {
name: 'Header',
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
	onStart: function(e) {
		window.history.go(-1)

		setTimeout(() => {
		let link = e.target.getAttribute('href')
		let contacts = document.getElementById(link)
		contacts.scrollIntoView({block: "center",behavior: "smooth"})

},300)

    },
orderWebsite(){
this.$emit('orderWebsite')
}
	},

}
</script>

<style scoped>
.nav-link.active{
	color:#F09D51!important;
}
</style>