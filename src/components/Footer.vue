<template>
	<footer class="section" id="footer">
<div class="container">
			<div class="form__footer">
				<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Оставьте заявку и получите <br>
консультацию профессионального <br>
маркетолога</label>
    <input type="email" class="form-control" id="exampleInputEmail2" value="Email">
  </div>
  <div class="form-group">
    <input type="tel" class="form-control" id="exampleInputTel2" value="Телефон">
  </div>
    <div class="form-group">
    <label for="exampleFormControlSelect1">Какая услуга вас интересует?</label>
    <select class="select" id="exampleFormControlSelect2">
      <option>Сайт визитка</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary">Оставить заявку</button>
    </div>
</form>
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
export default{
	data(){
		return{
			logoImg: require('../assets/logo.svg')
		}
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