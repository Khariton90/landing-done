<template>
<div>
<Header />
 <transition name="slide" mode="out-in">
	<div v-show="!menu">
<!--Секция - Разработка сайтов-->
<Development/>
		<!--Секция - Для кого это необходимо-->
<WhoThis />
<!--Секция -Полная поддержка-->
	<Support />
<!--Секция -Расскажите о своем проекте-->
	<Usabout />
<!--Секция -Цены-->
	<Price />
<!--Секция -Шаги разработки-->
	<Steps />
<!--Секция -Наши работы-->
	<OurJob />


<Youget />

<Footer id="contacts" />
	</div>
 </transition>
</div>
</template>

<script>
import Development from "@/components/Development"
import Usabout from "@/components/Section-us-about"
import WhoThis from "@/components/Who-this"
import Steps from "@/components/Section-steps"
import Support from "@/components/Section-support"
import Youget from "@/components/Youget"
import Price from "@/components/Section-price"
import Footer from "@/components/Footer"
import Carousel from "@/components/carousel"
import Header from "@/components/Header"
import OurJob from "@/components/OurJob"
import scrollTo from "../scripts/scrollTo.js"
import {mapGetters} from "vuex"
export default {
	data(){
			return {
			menu:false,
	}
	},
	components:{
		Header,
		Development,
		WhoThis,
		Usabout,
		OurJob,
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
	            var section=this.$router.currentRoute.hash.replace("#", "");
            if (section)
                this.$nextTick(()=> window.document.getElementById(section).scrollIntoView({behavior:'smooth'}));
                          


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
position: static;
bottom: -70px;
transition: 0.3s all 0s ease;
}

#iWant.fixBtn{
		position: fixed;
	z-index: 100;
	opacity: 1;
left:0;
bottom: 35px;
right: 0;
margin: 0 auto;
transition: bottom 0.3s ease 0s;
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
	transition: bottom 0.3s ease 0s;
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