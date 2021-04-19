<template>
	<div>
	<transition name="slide" mode="out-in">

	<div v-show="menu"class="mobile-menu">
		<ul>

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
				<a href="website__development" v-scroll-to="''" @click.prevent="onStart" class="nav-link home">Главная</a>
				</li>
			<li class="nav-item">
			<a href="full__support"  v-scroll-to="''" @click.prevent="onStart" class="nav-link">Поддержка</a>
				</li>
			<li class="nav-item">
				<a href="how__much"  v-scroll-to="''" @click.prevent="onStart"  class="nav-link">Цены</a>
				</li>
			<li class="nav-item">
			<a href="our__job"  v-scroll-to="''" @click.prevent="onStart"  class="nav-link activeThis active">Наши работы</a>
				</li>
			<li class="nav-item">
			<a href="contacts"  v-scroll-to="''" @click.prevent="onStart" class="nav-link cont">Контакты</a>
				</li>
				</ul>
								<button @click="orderWebsite" class="order__website" id="buttonTop">Заказать сайт</button>
			</div>
		<button @click="menu ? menu = false : menu = true" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon" :class="{active: menu}"><span></span></span>
		</button>
		</div>
	</nav>
</header>
</div>
</template>

<script>
    export default {
name: 'Header',
data(){
	return{
			menu:false,

	}
},
methods:{
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