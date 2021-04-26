			<!--Секция - Для кого это необходимо-->
<template>
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
</template>
<script>
import Carousel from "@/components/carousel"
	export default{
		data(){
			return{
						title: 'Для кого это необходимо?',
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
			Carousel
		}
	}
</script>