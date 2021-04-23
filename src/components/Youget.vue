<template>
			<!--Секция -Работая с нами вы получаете-->
			<section class="section you__get">
	<div class="container">
		<h2>Работая с нами -<br> вы получаете:</h2>
		<div class="row site__describe">
			<div class="col-md">
		<img :src="imgSupport" alt="">
			<h3>Инструмент</h3>
			<p>с помощью которого уже можно<br> работать</p>
			</div>
			<div class="col-md">
			<img :src="imgSupport" alt="">
			<h3>Механизм</h3>
			<p>по управлению содержимым сайта</p>
			</div>
			<div class="col-md">
			<img :src="imgSupport" alt="">
			<h3>Файлы</h3>
			<p>разработанные логотипы, фото,<br> отрисовки</p>
			</div>
		</div>
		<div class="row site__describe">
						<div class="col-md">
			<img :src="imgSupport" alt="">
			<h3>Рекламу</h3>
			<p>Комплексное формирование тарифов, <br>
			включает в себя все необходимые<br> услуги для получения клиентов без<br>
 			лишних затрат</p>
			</div>
						<div class="col-md">
			<img :src="imgSupport" alt="">
			<h3>Инструкции</h3>
			<p>Автоматизация процессов разработки <br>
			современного сайта, позволяет<br>
			сократить время реализации проекта, с<br>
			сохранением индивидуального подхода</p>
			</div>
						<div class="col-md">
			<img :src="imgSupport" alt="">
			<h3>Поддержку</h3>
			<p>Не нужно уметь программировать, <br>
			чтобы вносить изменения на сайте.<br>
			Меняйте элементы на сайте легко в<br>
			несколько кликов!</p>
			</div>
		</div>
		<div class="row site__describe">
						<div class="col-md">
			<img :src="imgSupport" alt="">
			<h3>Доступы</h3>
			<p>Комплексное формирование тарифов,<br>
			включает в себя все необходимые<br>
			услуги для получения клиентов без<br>
			лишних затрат</p>
			</div>
						<div class="col-md">
			<img :src="imgSupport" alt="">
			<h3>Партнёра</h3>
			<p>Автоматизация процессов разработки <br>
			современного сайта, позволяет<br>
			 сократить время реализации проекта, с<br>
			сохранением индивидуального подхода</p>
			</div>
						<div class="col-md">
			<img :src="imgSupport" alt="">
			<h3>Легко управлять</h3>
			<p>Не нужно уметь программировать, <br>
			чтобы вносить изменения на сайте.<br>
			Меняйте элементы на сайте легко в<br>
			несколько кликов!</p>
			</div>
		</div>
	</div>
							<div class="row brif">
<router-link to="/quiz" class="btn btn-primary d-flex justify-content-center align-items-center">Заполнить квиз</router-link>
	</div>
</section>
</template>

<script>
	export default{
		name: 'Youget',
		data(){
			return{
imgSupport: require('../assets/VectorPlus.svg')
			}
		}
}
</script>