<template>
<div>
<transition name="slide" mode="out-in">

	<div v-show="MENU_STATE"class="mobile-menu">
		<ul>
			<li @click="menuClick" v-for="item of menuItem" v-scroll-to="item.link" :class="{'nav-link' : menu}">
				{{item.item}}
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
			<a  class="nav-link activeThis" v-scroll-to="'#our__job'">Наши работы</a>
				</li>
			<li class="nav-item">
			<a  class="nav-link cont" v-scroll-to="'#contacts'">Контакты</a>
				</li>
				</ul>
								<button class="order__website" id="buttonTop">Заказать сайт</button>
			</div>
		<button @click="menuClick" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon" :class="{active: menu}"><span></span></span>
		</button>
		</div>
	</nav>
</header>
 <transition name="slide" mode="out-in">
	<div v-show="!menu">

		<!--Секция - Разработка сайтов-->
<Development :message="message" />

		<!--Секция - Для кого это необходимо-->
	<section  class="who__this" id="who__this">
<div class="container">
<div class="row who">
<div class="col-md">
<h2>{{ title }}</h2>
</div>
</div>
<div class="blocks">
		<div class="row job">
		<div class="col-4 works"
		v-for="cart of carts"
		v-on:mouseover="cart.isActive = true"
		v-on:mouseleave="cart.isActive = false">
		
			<img v-bind:src='cart.image'>

			<div :class="{active: cart.isActive}" class="describe__job">

			<p class="describe__title"
			v-html="cart.title"
			:class="{active: cart.isActive}"></p>

			<div class="about__this"
			:class="{active: cart.isActive}">

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

		<!--Секция -Полная поддержка-->
	<Support />

		<!--Секция -Расскажите о своем проекте-->
	<Usabout />
			<!--Секция -Цены-->
	<Price />

		<!--Секция -Шаги разработки-->
		<Steps />

		<!--Секция -Наши работы-->

	<section class="section our__job" id="our__job">
<div class="container">
<div class="row who">
<div class="col-md">
<h2>{{ titleJob }}</h2>
</div>
</div>
<div class="blocks">
		<div class="row job">
		<div class="col-4 works" v-for="cart of carts" v-on:mouseover="cart.isActive = true"v-on:mouseleave="cart.isActive = false">
			<img v-bind:src='cart.image'>
			<div :class="{active: cart.isActive}" class="describe__job">
			<p class="describe__title" v-html="cart.title" :class="{active: cart.isActive}"></p>
			<div class="about__this" :class="{active: cart.isActive}">
				<p v-html="cart.about"></p>
			</div>
		</div>
		</div>
		</div>
					<div class="row brif">
<router-link to="/projects" class="btn btn-primary d-flex justify-content-center align-items-center">Посмотреть все</router-link>
	</div>
	</div>
	</div>
		<div class="wrapper">
		<Carousel :carts="carts"/>
							<div class="row brif">
		<button class="btn btn-primary" id="viewАll" v-on:click="$router.push({name: 'projects'})">Посмотреть все</button>
	</div>
	</div>
</section>

<Youget />

<Footer id="contacts" />
	</div>
 </transition>
</div>
</template>

<script>
import Development from "@/components/Development"
import Usabout from "@/components/Section-us-about"
import Steps from "@/components/Section-steps"
import Support from "@/components/Section-support"
import Youget from "@/components/Youget"
import Price from "@/components/Section-price"
import Footer from "@/components/Footer"
import Carousel from "@/components/carousel"
import scrollTo from "../scripts/scrollTo.js"
import {mapGetters} from "vuex"
export default {
	data(){
			return {
			menu:false,
			menuItem: [
{
item: 'Главная',
link: '#website__development'
},
{
item: 'Наши Работы',
link: '#our__job'
},
{
item: 'Цены',
link: '#how__much'
},
{
item: 'Поддержка',
link: '#full__support'
},
{
item: 'Контакты',
link: '#contacts'
},
			],

		message: '19 999',
		title: 'Для кого это необходимо?',
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
	about: 'наращивание ресниц,<br> шитьё, массаж, ремонт<br> техники или уборка...',
	isActive: false,
	name: 'garage',
},
{
	id:3,
	image: require('../assets/coach.jpg'),
	title: 'Личный тренер',
	about: 'наращивание ресниц,<br> шитьё, массаж, ремонт<br> техники или уборка...',
	isActive: false,
	name: 'coach',
},
{
	id:4,
	image: require('../assets/courses.jpg'),
	title: 'Курсы',
	about: 'наращивание ресниц,<br> шитьё, массаж, ремонт<br> техники или уборка...',
	isActive: false,
	name: 'courses',
},
{
	id:5,
	image: require('../assets/sales.jpg'),
	title: 'Продажа товара',
	about: 'наращивание ресниц,<br> шитьё, массаж, ремонт<br> техники или уборка...',
	isActive: false,
	name: 'sales',
},
{
	id:6,
	image: require('../assets/creative.jpg'),
	title: 'Для творчества',
	about: 'наращивание ресниц,<br> шитьё, массаж, ремонт<br> техники или уборка...',
	isActive: false,
	name: 'creative',
},
{
	id:7,
	image: require('../assets/engineering.jpg'),
	title: 'Строительство<br> и инженерия',
	about: 'наращивание ресниц,<br> шитьё, массаж, ремонт<br> техники или уборка...',
	isActive: false,
	name: 'engineering',
},
{
	id:8,
	image: require('../assets/beauty.jpg'),
	title: 'Красота и здоровье',
	about: 'наращивание ресниц,<br> шитьё, массаж, ремонт<br> техники или уборка...',
	isActive: false,
	name: 'beauty',
},
{
	id:9,
	image: require('../assets/promotion.jpg'),
	title: 'Продвижение чего-либо',
	about: 'наращивание ресниц,<br> шитьё, массаж, ремонт<br> техники или уборка...',
	isActive: false,
	name: 'promotion',
},
				],


	}
	},
	components:{
		Development,
		Usabout,
		Steps,
		Support,
		Youget,
		Price,
		Footer,
		Carousel
	},
computed:{
...mapGetters([
'MENU_STATE'
	])
},
	methods: {
menuClick(){
	this.$store.dispatch('TOGGLE_MENU')
},
 navActive() {
	if(window.pageYOffset < 70){
		document.querySelector('.bg-light').classList.remove('active');
	}
	else{
		  document.querySelector('.bg-light').classList.add('active');
	}
},


	},
mounted() {
	window.addEventListener('scroll', this.navActive);
	window.addEventListener('scroll', scrollTo);
},
destroyed(){
window.removeEventListener('scroll', this.navActive);
window.removeEventListener('scroll', scrollTo);
},

}



</script>


<style>
.last{
	height: 40px;
}
#iWant{
opacity:1;
z-index: 1;
transition: 1s all 0s ease;
position: static;
}

#iWant.fixBtn{
		position: fixed;
	z-index: 100;
	opacity: 1;
left:0;
bottom: 100px;
right: 0;
margin: 0 auto;
transition: 1s all 0s ease;
}
.mobile-menu{
	width:100%;
	height:100%;
	background:#E0DFD5;
	display:flex;
	justify-content: space-between;
	align-items:center;
	flex-direction:column;
	position: fixed;
	top:0;
	z-index: 100;
	overflow: auto;
	transition: all 1s ease 0s;
}

.mobile-menu ul{
	padding:0;
	width:255px;
	height:100vh;
	background:#E0DFD5;
	display:flex;
	justify-content: center;
	align-items:flex-start;
	flex-direction:column;
}
.mobile-menu li{
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 44px;
color: #313638;
	cursor:pointer;
}

.slide-enter-active,.slide-leave-active{
	transition: all 0.2s ease;
	left:0;
}
.slide-leave-to,.slide-enter{
	transition: all 0.2s ease;
left:-100%;
}
</style>