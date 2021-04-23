<template>
	<div>
		<HeaderChild />
		<section class="auto__repair">
	
	<div class="auto__title">
		<h5 class="projectsTitle">Мастерская на дому</h5>
		<p class="projectsSubtitle">WorkShop</p>
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

</style>