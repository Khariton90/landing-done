<template>
			<!--Секция -Полная поддержка-->
	<section class="section full__support" id="full__support">
<div class="container">
<h2>Полная поддержка на всех этапах</h2>
<div class="row site__describe">
	<div class="col-md">
		<img :src="imgSupport" alt="">
		<h3>Сайты — дешево</h3>
		<p>Комплексное формирование тарифов,<br> включает в себя все необходимые<br> услуги для получения клиентов без<br> лишних затрат</p>
	</div>
	<div class="col-md">
		<img :src="imgSupport" alt="">
		<h3>Быстрые сроки</h3>
		<p>Автоматизация процессов разработки<br> современного сайта, позволяет<br> сократить время реализации проекта</p>
	</div>
	<div class="col-md">
		<img :src="imgSupport" alt="">
		<h3>Легко управлять</h3>
		<p>Не нужно уметь программировать,<br> чтобы вносить изменения на сайте.<br> Меняйте элементы на сайте легко в<br> несколько кликов!</p>
	</div>
</div>
<div class="row site__describe">
	<div class="col-md">
		<img :src="imgSupport" alt="">
		<h3>Служба поддержки</h3>
		<p>Решение любых возникающих<br> сложностей 365 дней в году в день<br> обращения.</p>
	</div>
	<div class="col-md">
		<img :src="imgSupport" alt="">
		<h3>Кроссбраузерность</h3>
		<p>Ваш сайт будет одинаково хорошо <br>
		смотреться во всех браузерах<br>
		и на всех разрешениях экрана</p>
	</div>
	<div class="col-md">
		<img :src="imgSupport" alt="">
		<h3>Обновления</h3>
		<p>Мы постоянно улучшаем <br>
		и развиваем возможности сайтов <br>
		для лучшей обработки входящего <br>
		трафика посетителей сайта</p>
	</div>
</div>
</div>
</section>
</template>

<script>
	export default{
		data(){
			return{
imgSupport: require('../assets/VectorPlus.svg')
			}
		}
	}
</script>