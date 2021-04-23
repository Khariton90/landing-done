<template>
	<div>
		<HeaderChild />
		<section class="auto__repair">
	
	<div class="auto__title">
		<h5 class="projectsTitle">Автомастерская</h5>
		<p class="projectsSubtitle">AutoRoom</p>
	</div>
</section>
<section class="project__description">
	<div class="container">
		<div class="row project__link">
			<div class="col-sm">
				<p class="linksTitle">Ссылка на сайт</p>
				<p><a href="http://www.autoroom.ru">www.autoroom.ru</a></p>
			</div>
			<div class="col-sm">
				<p class="linksTitle">Время создания</p>
				<p>2021</p>
			</div>
			<div class="col-sm">
				<p class="linksTitle">Категория</p>
				<p>Услуги</p>
			</div>
		</div>
		<div class="row tasks-opetations">
			<h2>Описание проекта</h2>
			<div class="col-md tasks">
				<span>Задачи</span>
				<ul>
					<li>Создание интернет-каталога, с целью показать объем<br> предлагаемого товара компанией, с удобным поиском по<br> коллекциям.</li>
					<li>Профессиональная анимация</li>
					<li>Адаптация под мобильные устройства</li>
					<li>Запуск рекламной компании в Яндекс Директ</li>
				</ul>
			</div>
			<div class="col-md operation">
				<span>Работа</span>
				<ul>
					<li>Разработка уникального дизайна </li>
					<li>Создание интернет-каталога на Laravel</li>
					<li>Наполнение контентом</li>
					<li>СЕО оптимизация</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section class="sitesImages">
	<div class="container">
		<div class="row cartsSites">
			<div class="col">
				<img src="../assets/carsRepairs.png" alt="carsRepairs">
			</div>
			<div class="col">
				<img src="../assets/servicesAndPrices.png" alt="servicesAndPrices">
			</div>
			<div class="col  btnPositionTop">
				<img src="../assets/advantagesAuto.png" alt="advantagesAuto">
			</div>
			<div class="col">
				<img src="../assets/reviewsAuto.png" alt="reviewsAuto">
			</div>
			<div class="col btnPositionBottom">
				<img src="../assets/connectionAuto.png" alt="connectionAuto">
			</div>
						<div class="col last">
				<button id="iWant" class="btn btn-primary">Хочу похожий</button>
			</div>
		</div>
	</div>
</section>
	<Footer />
	</div>
</template>

<script>
import Footer from "@/components/Footer"
import HeaderChild from "@/components/HeaderChild"
import btnFixed from "../scripts/btnFix"
	export default{
name:'Garage',
components:{
	Footer,
	HeaderChild
},
methods: {

},
mounted() {
window.addEventListener('scroll', btnFixed)
},
beforeDestroy(){
	window.removeEventListener('scroll', btnFixed)
	window.addEventListener('scroll', scrollTo);
}
}
</script>


<style scoped>

a{
	cursor:pointer;
}
	.projects{
	padding: 62px 0 259px 0;
	background: #E5E5E5;
}
.auto__repair{
	background: url(../assets/AutoRepair.png) no-repeat center;
	background-size: 100%;
	width: 100%;
	height: auto;
	padding: calc(0px + 160 * ((100vw - 375px) / (1920 - 375))) 0;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.project__description,.sitesImages{
background: #E5E5E5;
}
.auto__title{
	background: rgba(0, 0, 0, 0.3);
	width:100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 27px 0 32px 0;
}

.projectsTitle{
	color: #E8E9EB;
	font-weight: bold;
font-size: calc(32px + 16 * ((100vw - 375px) / (1920 - 375)));
line-height: calc(39px + 20 * ((100vw - 375px) / (1920 - 375)));
}
.projectsSubtitle{
color:#F09D51;
	font-weight: bold;
font-size: calc(32px + 16 * ((100vw - 375px) / (1920 - 375)));
line-height: calc(39px + 20 * ((100vw - 375px) / (1920 - 375)));
}
.project__description{
	padding: 12px 0 74px 0;
}
.project__link .col-sm{
	text-align:center;
}
.linksTitle{
font-weight: 600;
font-size: 18px;
line-height: 22px;
color: #313638;
}
.project__description h2 {
	text-align:left;
	padding-top: 37px;
	padding-left: 0;
	color: #000000;
	width:100%;
}
.tasks-opetations span{
	font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #000000;
margin-bottom: 16px;
display: block;
}
.tasks-opetations{
	padding: 0 20px;
}
.tasks-opetations ul{
	list-style-type: disc;
	padding-left: 16px;
}
.tasks-opetations li{
	padding-left: 0;
}
.cartsSites div{
	text-align: center;
	padding-bottom: 30px;
}
.cartsSites div:last-child{
padding-bottom: 197px;
}
.cartsSites{
	flex-direction: column;
}
.cartsSites img{
	max-width: 100%;
	height: auto;
}
@media (min-width: 500px) {

}
</style>