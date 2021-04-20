<template>
<div>
<Header />
 <transition name="slide" mode="out-in">
	<div v-show="!menu">

		<!--Секция - Разработка сайтов-->
<Development/>

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
import Header from "@/components/Header"
import scrollTo from "../scripts/scrollTo.js"
import {mapGetters} from "vuex"
export default {
	data(){
			return {
			menu:false,
		message: 19999,
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
		Header,
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
'MENU_STATE',
'MENU_ITEM'
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