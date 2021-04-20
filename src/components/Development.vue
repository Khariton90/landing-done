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
<Form />
		</div>
		</div>
	</div>
</section>
</template>

<script>
import Form from "@/components/Form"
		export default{
data(){
	return{
message: '19 999'
	}
},
components:{
	Form
},
methods:{

},
mounted(){

}
		}
</script>


<style>

</style>