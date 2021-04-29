<template>
<div>
<HeaderChild :menuList="menuItem" @orderWebsite="orderWebsite"/>
<transition name="slide" mode="out-in">
<div v-show="!menu">
				<!--Секция - Разработка сайтов-->
<Development/>
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
		<div class="col-4 works" v-for="cart of carts" v-on:mouseover="cart.isActive = true"v-on:mouseleave="cart.isActive = false">
			<img :src='cart.image'>
			<div   @click="$router.push({name: cart.name})" :class="{active: cart.isActive}" class="describe__job">
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
import HeaderChild from "@/components/HeaderChild"
	export default{
		name: 'Projects',
		data(){
			return{
			menu:false,
			menuItem: [
{
item: 'Главная',
link: 'website__development'
},
{
item: 'Поддержка',
link: 'full__support'
},
{
item: 'Цены',
link: 'how__much'
},
{
item: 'Наши Работы',
link: 'our__job'
},
{
item: 'Контакты',
link: 'contacts'
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
			HeaderChild
		},
methods:{
orderWebsite(e){
	this.$router.push('/')
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