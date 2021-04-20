<template>
	<footer class="section" id="footer">
<div class="container">
			<div class="form__footer">
				<Form />
</div>
<div class="row footer__describe">
	<div class="col-4 col-lg-5 col-xl-4"></div>
	<div class="col-sm col-lg-4 col-xl">
		<span>Наши услуги</span>
	<ul>
		<li>Разработка сайта визитки</li>
		<li>Разработка интернет-магазина</li>
		<li>Разработка Landing Page</li>
		<li>Разработка индивидуального сайта</li>
		<li>Поисковое продвижение</li>
		<li>Продвижение в соцсетях</li>
		<li>Техподдержка сайтов</li>
		<li>Контекстная реклама сайтов</li>
	</ul>
	</div>
	<div class="col-sm col-lg-2 col-xl footerContacts">
		<span>Контакты</span>
		<ul class="contacts">
			<li>Телефон</li>
			<li><a href="tel:8-800-666-66-66">8-800-666-66-66</a></li>
			<li>Email</li>
			<li><a href="mailto:info@landingdone.ru">info@landingdone.ru</a></li>
			<li>Адрес</li>
			<li><a href="#">г. Санкт - Петербург</a></li>
		</ul>
	</div>
</div>
</div>
<div class="logo__footer">
	<a href="#"><img class="" :src="logoImg" alt="logoFooter"></a>
</div>
</footer> 
</template>

<script>
import Form from "@/components/Form"
export default{
	data(){
		return{
			logoImg: require('../assets/logo.svg')
		}
	},
	components:{
		Form
	}
}

</script>

<style scoped>
.logo__footer{
	padding-bottom:20px!important;
}
.footer__describe{
	margin-top:20px;
}
@media screen (min-width: 992px) {
	.footer__describe{
	margin-top:0px;
}
}
</style>