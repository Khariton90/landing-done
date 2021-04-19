<template>
	<!--Секция - Разработка сайтов-->
<section class="section website__development" id="website__development">
	<div class="container">
		<div class="row website">
			<div class="col-lg-6">
			<h1>Разработка cайтов <br>от <span id="priceTop">{{ message }}</span> рублей <br>и 7 дней</h1>
			<ul class="describe">
			<li>Адаптивная верстка <br>
			под телефон и планшет</li>
			<li>Зеленая зона скорости <br>
			Google Page Speed</li>
			</ul>
		</div>
			<div class="col animation">
			<img class="anim" src="" alt="">
		</div>
			<div class="col form__header">
			<form>
			<div class="form-group">
			<label for="exampleInputEmail1">Оставьте заявку и получите <br>
			консультацию профессионального <br>
			маркетолога</label>
			<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
			</div>
			<div class="form-group">
			<input type="tel" class="form-control" id="exampleInputTel1" placeholder="Телефон">
			</div>
			<div class="form-group">
			<label for="exampleFormControlSelect1">Какая услуга вас интересует?</label>
			<select class="select" id="exampleFormControlSelect1">
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
		</div>
	</div>
</section>
</template>

<script>
		export default{
			props: ['message'],
		}
</script>


<style>

</style>