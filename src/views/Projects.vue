<template>
<div>
<transition name="slide" mode="out-in">

	<div v-show="MENU_STATE"class="mobile-menu">
		<ul>
			<li @click="menuClick" v-for="item of menuItem" >
				{{item.item}}
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
								<button class="order__website" id="buttonTop" @click="menuClick">Заказать сайт</button>
			</div>
		<button @click="menuClick" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"><span></span></span>
		</button>
		</div>
	</nav>
</header>
<transition name="slide" mode="out-in">
<div v-show="!menu">
				<!--Секция - Разработка сайтов-->
<Development :message="message"/>
			<!--Секция - Наши работы-->
	<section class="section our__job" id="our__job">
<div class="container">
<div class="row who">
<div class="col-md">
<h2>{{ titleJob }}</h2>
</div>
</div>
<div class="blocks">
		<div class="row job">
		<div class="col-4 works" v-for="cart of carts" v-on:mouseover="cart.isActive = true"v-on:mouseleave="cart.isActive = false" v-on:click="$router.push({name: cart.name})">
			<img v-bind:src='cart.image'>
			<div  v-on:click="$router.push({ name: '{cart.name}', params: { userId: cart.name }})" :class="{active: cart.isActive}" class="describe__job">
			<p class="describe__title" v-html="cart.title" :class="{active: cart.isActive}"></p>
			<div class="about__this" :class="{active: cart.isActive}">
				<p v-html="cart.about"></p>
			</div>
		</div>
		</div>
		</div>
	</div>
	</div>
			<div class="wrapper">
		<Carousel :carts="carts"/>
	</div>
</section>
<Footer />
</div>
 </transition>
</div>
</template>

<script>
import Development from "@/components/Development"
import Footer from "@/components/Footer"
import Carousel from "@/components/carousel"
import Header from "@/components/Header"
import {mapGetters} from "vuex"
	export default{
		name: 'Projects',
		data(){
			return{
			menu:false,
			message: '19 999',
			menuItem: [
{
item: 'Главная',
link: '#website__development'
},
{
item: 'Наши Работы',
link: '#full__support'
},
{
item: 'Цены',
link: '#how__much'
},
{
item: 'Поддержка',
link: '#our__job'
},
{
item: 'Контакты',
link: '#contacts'
},
			],
		titleJob: 'Наши работы',
				carts: [
{
	id:1,
	image: require('../assets/workshop.jpg'),
	title: 'Мастерская на дому',
	about: 'наращивание ресниц,<br> шитьё, массаж, ремонт<br> техники или уборка...',
	isActive: false,
	name: 'workshop',
},
{
	id:2,
	image: require('../assets/garage.svg'),
	title: 'Автомастерская',
	about: '',
	isActive: false,
	name: 'garage',
},
{
	id:3,
	image: require('../assets/coach.jpg'),
	title: 'Личный тренер',
	about: '',
	isActive: false,
	name: 'coach',
},
{
	id:4,
	image: require('../assets/courses.jpg'),
	title: 'Курсы',
	about: '',
	isActive: false,
	name: 'courses',
},
{
	id:5,
	image: require('../assets/sales.jpg'),
	title: 'Продажа товара',
	about: '',
	isActive: false,
	name: 'sales',
},
{
	id:6,
	image: require('../assets/creative.jpg'),
	title: 'Для творчества',
	about: '',
	isActive: false,
	name: 'creative',
},
{
	id:7,
	image: require('../assets/engineering.jpg'),
	title: 'Строительство<br> и инженерия',
	about: '',
	isActive: false,
	name: 'engineering',
},
{
	id:8,
	image: require('../assets/beauty.jpg'),
	title: 'Красота и здоровье',
	about: '',
	isActive: false,
	name: 'beauty',
},
{
	id:9,
	image: require('../assets/promotion.jpg'),
	title: 'Продвижение чего-либо',
	about: '',
	isActive: false,
	name: 'promotion',
},
				],
			}
		},
		components: {
			Development,
			Footer,
			Carousel,
			Header
		},
computed:{
...mapGetters([
'MENU_STATE'
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
		window.history.go(-1)

		setTimeout(() => {
		let link = e.target.getAttribute('href')
		let contacts = document.getElementById(link)
		contacts.scrollIntoView({block: "center",behavior: "smooth"})

},300)

    },

	},

mounted(){

}
}
</script>

<style scoped>
.our__job {
    padding: 200px 0;
}

@media (min-width: 992px) {
.our__job {
    padding: 100px 0 200px 0;
}

}

</style>