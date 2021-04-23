<template>
				<form>
			<div class="form-group">
			<label for="exampleInputEmail1">Оставьте заявку и получите <br>
			консультацию профессионального <br>
			маркетолога</label>
			<input type="email" class="form-control" placeholder="Email"ref="exampleInputEmail1"
			@input="formMail"
			:class="{is_valid: mail}"
			>
			<div class="valid-tooltip" :class="{active: mail}">
      Все хорошо!
    </div>
      <div class="invalid_tooltip" ref="mailMessage">
        Введите корректный Email
      </div>
			</div>
			<div class="form-group">
			<input type="number" class="form-control" ref="exampleInputTel1" :class="{is_valid: tel}"
			@input="formTel"
			 placeholder="Телефон">
			<div class="valid-tooltip" :class="{active: tel}">
      Все хорошо!
    </div>
      <div class="invalid_tooltip" ref="telMessage">
        Введите корректный телефон
      </div>
			</div>
			<div class="form-group">
			<label for="exampleFormControlSelect1">Какая услуга вас интересует?</label>
			<select class="select exampleFormControlSelect1">
			<option v-for="site in siteVersion">{{ site }}</option>
			</select>
		</div>
			<div class="form-group">
			<button type="submit" class="btn btn-primary" @click.prevent="formSubmit">Оставить заявку</button>
			</div>
			</form>
</template>

<script>
	export default{
		data(){
			return{
				tel: false,
				mail:false,
				siteVersion: [
				'Сайт визитка',
				'Лендинг',
				'Промосайт',
				'Корпоративный сайт',
				'Интернет-магазин'
				],
				formValue: []
			}
		},
		methods:{
formMail(){
let mail = this.$refs.exampleInputEmail1
	if(!mail.value.includes('@') || !mail.value.includes('.ru') && !mail.value.includes('.com')){
	this.mail = false
	mail.classList.add('invalid')
	this.$refs.mailMessage.classList.add('active')
	return false
	}else{
		this.mail = true
	this.$refs.mailMessage.classList.remove('active')
	}
},
formTel(){
let tel = this.$refs.exampleInputTel1
	tel.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
	if(tel.value.length < 11){
	this.tel = false
	tel.classList.add('invalid')
	this.$refs.telMessage.classList.add('active')
	return false
	}else{
	this.tel = true
	this.$refs.telMessage.classList.remove('active')
	}
},
formSubmit(){
	let mail = this.$refs.exampleInputEmail1
	let tel = this.$refs.exampleInputTel1
	if(!this.mail || !this.tel){
		this.formTel()
		this.formMail()
	}else{
		this.formValue.push(mail.value)
		this.formValue.push(tel.value)
		mail.value = ''
		tel.value = ''
		this.tel = false
		this.mail = false
	}
}
		}
	}
</script>
