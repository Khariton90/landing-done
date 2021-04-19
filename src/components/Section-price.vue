<template>
	
		<!--Секция -Сколько это стоит-->
			<section class="section how__much" id="how__much">
	<div class="container">
		<h2>Сколько это стоит</h2>
		<div class="row how" @mouseover="changeBackground" @mouseout="standartActive">
	<div class="col-xl standard active priceList">
		<div class="standard__title allTitle active">
		<h3 class="active">Стандарт</h3>
		<p>Landing Page +<br>
		подготовка под запуск рекламы<br>
		(разработка за 10 дней)</p>
		</div>
		<ul>
	<li>Подключение хостинга</li>
	<li>Настройка домена</li>
	<li>Корпоративная почта</li>
	<li>Разработка логотипа</li>
	<li>Разработка прототипа страницы</li>
	<li>Уникальный продающий дизайн</li>
	<li>Адаптивная верстка под все<br> устройства</li>
	<li>Полная SEO оптимизация сайта</li>
	<li>Установка аналитики Яндекс и Гугл</li>
	<li>Подключение бесплатного чата<br> онлайн</li>
	<li>Без абонентской платы</li>
		</ul>
		<ul>
	<li>Система управления сайтом (CMS)</li>
	<li>Создание уникального предложения</li>
	<li>Настройка Яндекс.Директ</li>
	<li>Настройка метрики на действия<br>пользователя</li>
		</ul>
		<ul>
		<li>Простая анимация на сайте</li>
		<li class="minus">До 10 блоков (секций) на сайте</li>
		<li class="minus">Наполним сайт материалами<br> (материалы<br> предоставляются в электронном<br> виде)</li>
				</ul>
				<div class="price" id="standartPrice">от 39 990 рублей</div>
			</div>
			<div class="col-xl minimum priceList"  >
				<div class="minimum__title allTitle active">
				<h3>Минимум</h3>
				<p>Лучшее решение<br>
для старта или рекламы<br>
(разработка за 7 дней)</p>
				</div>
	<ul>
		<li>Подключение хостинга</li>
		<li>Настройка домена</li>
		<li>Корпоративная почта</li>
		<li>Разработка логотипа</li>
		<li>Разработка прототипа страницы</li>
		<li>Уникальный продающий дизайн</li>
		<li>Адаптивная верстка под все устройства</li>
		<li>Полная SEO оптимизация сайта</li>
		<li>Установка аналитики Яндекс и Гугл</li>
		<li>Подключение бесплатного чата онлайн</li>
		<li>Без абонентской платы</li>
	</ul>
		<ul class="minus">
			<li>Система управления сайтом (CMS)</li>
			<li>Создание уникального предложения</li>
			<li>Настройка Яндекс.Директ</li>
			<li>Настройка метрики на действия <br>
			пользователя</li>
		</ul>
			<ul class="minus">
				<li>Анимация на сайте</li>
				<li>До 10 блоков (секций) на сайте</li>
				<li>Наполним сайт материалами (материалы<br>
				предоставляются в электронном виде)</li>
			</ul>
			<div class="price" id="minimumPrice">от 19 990 рублей</div>
	</div>
			<div class=" col-xl maximum priceList">
				<div class="maximum__title allTitle active">
				<h3>Максимум</h3>
				<p>Полноценная система<br>
с маркетинговой проработкой<br>
(разработка за 14 дней)</p>
				</div>
<ul>
	<li>Подключение хостинга</li>
	<li>Настройка домена</li>
	<li>Корпоративная почта</li>
	<li>Разработка логотипа</li>
	<li>Разработка прототипа страницы</li>
	<li>Уникальный продающий дизайн</li>
	<li>Адаптивная верстка под все устройства</li>
	<li>Полная SEO оптимизация сайта</li>
	<li>Установка аналитики Яндекс и Гугл</li>
	<li>Подключение бесплатного чата онлайн</li>
	<li>Без абонентской платы</li>
</ul>
<ul>
	<li>Система управления сайтом (CMS)</li>
	<li>Создание уникального предложения</li>
	<li>Настройка Яндекс.Директ</li>
	<li>Настройка метрики на действия <br>
	пользователя</li>

</ul>
<ul>
	<li>Анимация Pro на сайте</li>
	<li>До 10 блоков (секций) на сайте</li>
	<li>Наполним сайт материалами (материалы<br>
	предоставляются в электронном виде)</li>
</ul>
								<div class="price" id="maximumPrice">от 59 990 рублей</div>
			</div>
		</div>
	</div>
</section>
</template>

<script>
	export default{
		name: 'Price',
		data(){
return{

}
		},
		methods:{
			changeBackground(){
				let allPrices = document.querySelectorAll('.priceList')
				allPrices.forEach(prices => prices.classList.remove('active'))
			},
			standartActive(){
				let allPrices = document.querySelectorAll('.priceList')
				allPrices[0].classList.add('active')
			}
		}
	}
</script>