<template>
	<div>
	<div class="quiz" v-if="incrementProgress  <= 3">
		<h1 v-if="incrementProgress  == 0">Нужна админка?</h1>
		<h1 v-else-if="incrementProgress  == 1">Вопрос 2</h1>
		<h1 v-else-if="incrementProgress  == 2">Вопрос 3</h1>
		<h1 v-else-if="incrementProgress  == 3">Вопрос 4</h1>
		<h1 v-else>Вопрос 5</h1>
		<div class="container">
			<div class="row">
				<div class="col-5 variants">
					<ul>
						<li class="variantType"
						 v-for="variant of variant1" 
						:key="variant.id" 
						:class="{active: variant.isActive}" 
						:id="variant.id"
						v-on:click="addVariants"><span>{{ variant.name }}</span></li>
					</ul>
				</div>
				<div class="col-12 col-md-7" v-if="incrementProgress  == 0">
					<div>
 <p>Для чего это нужно:</p>

- менять необходимый фото и описание;<br>
- поменять цену услуге или товару;<br>
- изменить адрес, телефон или почту;<br>
- не нанимать программиста для внесения изменений в текст сайта;<br>
- актуализировать данные на сайте самому без программиста;<br>
- и т.п.'

</div>
				</div>
				<div class="col-12 col-md-7" v-else-if="incrementProgress  == 1">
					<div>
 <p>Вопрос 2:</p>

- менять необходимый фото и описание;<br>
- поменять цену услуге или товару;<br>
- изменить адрес, телефон или почту;<br>
- не нанимать программиста для внесения изменений в текст сайта;<br>
- актуализировать данные на сайте самому без программиста;<br>
- и т.п.'
 

</div>
				</div>
				<div class="col-12 col-md-7" v-else-if="incrementProgress  == 2">
					<div>
 <p>Вопрос 3:</p>

- менять необходимый фото и описание;<br>
- поменять цену услуге или товару;<br>
- изменить адрес, телефон или почту;<br>
- не нанимать программиста для внесения изменений в текст сайта;<br>
- актуализировать данные на сайте самому без программиста;<br>
- и т.п.

</div>
				</div>
				<div class="col-12 col-md-7" v-else-if="incrementProgress  == 3">
					<div>
 <p>Вопрос 4:</p>

- менять необходимый фото и описание;<br>
- поменять цену услуге или товару;<br>
- изменить адрес, телефон или почту;<br>
- не нанимать программиста для внесения изменений в текст сайта;<br>
- актуализировать данные на сайте самому без программиста;<br>
- и т.п.'

</div>
				</div>
				<div class="col-12 col-md-7" v-else-if="incrementProgress  == 4">
					<div>
 <p>Вопрос 5:</p>

- менять необходимый фото и описание;<br>
- поменять цену услуге или товару;<br>
- изменить адрес, телефон или почту;<br>
- не нанимать программиста для внесения изменений в текст сайта;<br>
- актуализировать данные на сайте самому без программиста;<br>
- и т.п.

</div>
				</div>
	</div>
	<div class="row btnVariants">

		<div>		<button class="btn btn-primary ignore" v-if="!btn"  @click="ignore">Пропустить</button>
<button class="btn btn-primary disabled" v-else>Пропустить</button>
		</div>

		<div>		<button class="btn btn-primary add" v-if="btn" @click="addClass">Ответить</button>
		<button class="btn btn-primary disabled" v-else>Ответить</button>
		</div>
	</div>
	<div class="row progressBar">
					<div class="quizStep">
			<div class="quizActive"></div>
				<div v-for="n of 5"class="steps" ></div>
			</div>
	</div>
		</div>

		</div>
		<div class="quiz quiz-result" v-else>
			<div class="container">
				<div class="row">
					<div class="col">
						<h2>Результат:</h2>
					</div>
				</div>

				<div class="row results ">
<div class="vars col-12" v-for="answer of answers" >
<hr>
 <p class="text-center">{{ answer.describeTitle }}</p>
<p class="describeQuiz" v-html="answer.describe"></p>
<hr>
 <p class=" pColor text-center">{{ results[answer.id] }}</p></div>
</div>
<div class="modal" tabindex="-1" ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Спасибо</h5>
 
      </div>
      <div class="modal-body">
        <p>Сообщение оправлено</p>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
<div class="row btnVariants endsBtn">
	<div>		<button class="btn btn-primary" @click="repeat">Ответить снова</button></div>
	<div>		<button class="btn btn-primary" @click="send">Отправить квиз</button></div>
</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Quiz',
		data(){
			return {
	incrementProgress: 0,
	width: 0,
	btn: true,
	stepItem: 0,
	variant1:[
{
	id:1,
	name: '- Да',
	isActive : true,
},
{
	id:2,
	name: '- Нет',
	isActive : false,
},
{
	id:3,
	name: '- Не знаю',
	isActive : false,
},
	],
	results:[],
answers: [
{
	id:0,
	describeTitle: 'Вопрос1',
	describe: `
- менять необходимый фото и описание;<br>
- поменять цену услуге или товару;<br>
- изменить адрес, телефон или почту;<br>
- не нанимать программиста для внесения изменений в текст сайта;<br>
- актуализировать данные на сайте самому без программиста;<br>
- и т.п.
	 `
},
{
	id:1,
	describeTitle: 'Вопрос2',
	describe: `
- менять необходимый фото и описание;<br>
- поменять цену услуге или товару;<br>
- изменить адрес, телефон или почту;<br>
- не нанимать программиста для внесения изменений в текст сайта;<br>
- актуализировать данные на сайте самому без программиста;<br>
- и т.п.
	 `
},
{
	id:2,
	describeTitle: 'Вопрос3',
	describe: `
- менять необходимый фото и описание;<br>
- поменять цену услуге или товару;<br>
- изменить адрес, телефон или почту;<br>
- не нанимать программиста для внесения изменений в текст сайта;<br>
- актуализировать данные на сайте самому без программиста;<br>
- и т.п.
	 `
},
{
	id:3,
	describeTitle: 'Вопрос4',
	describe: `
- менять необходимый фото и описание;<br>
- поменять цену услуге или товару;<br>
- изменить адрес, телефон или почту;<br>
- не нанимать программиста для внесения изменений в текст сайта;<br>
- актуализировать данные на сайте самому без программиста;<br>
- и т.п.
	 `
}
],
		}
	},
	describeVariants:[

	],
		methods:{
menuRemoveResize(){
if(this.incrementProgress >= 3){
	window.removeEventListener('resize', this.resizeProgress)
}else{
	window.addEventListener('resize', this.resizeProgress)
}

},
send(){
	const modal = this.$refs.modal
	modal.style.display = 'block'
	setTimeout(()=>{
		modal.style.display = 'none'
			window.history.go(-1)
	},2000)

},
repeat(){
	setTimeout(() => {
this.incrementProgress = 0
this.width = 0
this.stepItem = 0
this.results = []
},500)
},
resizeProgress(){
	this.width = 0;
	let quizStep = document.querySelector('.quizStep').offsetWidth;
	let quizActive = document.querySelector('.quizActive')
	this.width += quizStep / 4 * this.stepItem
	quizActive.style.width = this.width + 'px'
},
addVariants(e){
this.variant1.forEach(variant => {
	if(variant.id == e.target.id){
		if(variant.isActive){
			variant.isActive = false
			this.btn = false
		}else{
			variant.isActive = true
			this.btn = true
		}
	}else{
		variant.isActive = false
	}
})
},

addClass(){
				this.menuRemoveResize()
	let steps = document.querySelectorAll('.steps')
this.variant1.forEach(variants => {
	if(variants.isActive){
			this.results.push(variants.name)
			for(let i = 0; i < steps.length; i++){
				if(this.incrementProgress < steps.length - 1){
	steps[this.incrementProgress].nextSibling.classList.add('activ')
	this.addQuiz()
	this.variant1.forEach(varian => varian.isActive = false)
	this.btn = false
}
return setTimeout(() => {
this.stepItem++
this.incrementProgress++
if(this.incrementProgress >=3){
	menuRemoveResize()
}
}, 1300)
}
		}else if(this.incrementProgress >= 3){
			this.btn = false
		}else{
		return false
		}
});

},
ignore(){
	if(this.incrementProgress >= 3){
			this.menuRemoveResize()
		}
	this.addQuiz()
setTimeout(() => {
	this.results.push('-')
this.stepItem++
this.incrementProgress++
}, 1300)
},
addQuiz(){
	let quizStep = document.querySelector('.quizStep').offsetWidth;
	let quizActive = document.querySelector('.quizActive')
	this.width += quizStep / 4
	quizActive.style.width = this.width + 'px'
	return this.width
},

},
mounted(){
	window.addEventListener('resize', this.resizeProgress)
},
destroyed(){
window.removeEventListener('resize', this.resizeProgress)
}
}
</script>


<style scoped>
.modal-content{
	background:#F09D51;
}
.vars {
	display: flex;
	flex-direction: column;
	align-items: center;
}
button{
	margin:30px;
}
.container{
	flex-grow: 1;
	    justify-content: space-between;
    display: flex;
    flex-direction: column;
}
.results{
	display: flex;
	flex-direction:row;
	align-items: center;
	justify-content: center;
}
.results .col-4{
	margin:10px 0px;
	padding: 0 20px;
}
p{
color:#313638;
padding: 10px 0;
font-weight:bold;
}
.pColor {
	padding: 10px 0;
	color:#F09D51!important;
	font-weight:bold;
	font-size:30px;
}
.progressBar{
	margin-bottom:32px;
}
.btnVariants{
	margin-bottom:42px;
	align-self: flex-end;
}
.btn-primary {
    height: 40px;
}
.btn-primary.disabled{
    color: #313638;
    background-color: #F09D51;
    border-color: #F09D51;
}
.quiz{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #E5E5E5;
    padding: 30px 10px;
}
.btnVariants button{
	margin:10px;
}
pre{
	font-size: calc(15px + 1 * ((100vw - 375px) / (1920 - 375)));
}
ul{
	padding:0;
}
h1{
	text-align: center;
	font-size: 24px;
line-height: 29px;
color: #313638;
padding: 62px 0 101px 0;
}
.variantType{
	transition: 0.2s all 0s ease;
	position: relative;
	border-radius:50%;
	width:26px;
height: 24px;
border:none;
background: #E0DFD5;
}
.variantType span{
	position: absolute;
	left: 80px;
	width:200px;
}
.variantType.active{
	background: #F09D51;
}
.variantType:hover{
	transition: 0.2s all 0s ease;
	border:1px solid grey;
}
.quizStep {
	position: relative;
	width:100%;
	height: 7px;
background: #D5D4CE;
position: relative;
display: flex;
justify-content: space-between;
}
.steps{
position: relative;
left:0;
top:-6px;
width: 19px;
height: 19px;
background: #D5D4CE;
border-radius:50%;
}
.steps:nth-child(2){
		background: #F09D51;
}
.steps.activ{
			transition: 3s all 0.5s ease;
		background: #F09D51;
}
.quizActive{
	position: absolute;
	left:0;
	top:0px;
	height: 7px;
	width:0;
	background: #F09D51;
			transition: 1s all 0.5s ease;
}
.variants{
	position: relative;
	display: flex;
		flex-direction: column;
}
.variants li {
	margin-bottom: 13px;
}
.btnVariants{
	justify-content: center;
}
.quiz-result{
	height: auto!important;
}
.describeQuiz{
	width: 70%;
}
.endsBtn{
	align-self: center!important;
}
@media screen(max-width: 992px) {
	.quiz{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #E5E5E5;
    padding: 50px 0;
}
}

</style>