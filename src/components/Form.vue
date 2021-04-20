<template>
				<form>
			<div class="form-group">
			<label for="exampleInputEmail1">Оставьте заявку и получите <br>
			консультацию профессионального <br>
			маркетолога</label>
			<input type="email" class="form-control" placeholder="Email"ref="exampleInputEmail1">
			</div>
			<div class="form-group">
			<input type="tel" class="form-control" ref="exampleInputTel1" placeholder="Телефон">
			</div>
			<div class="form-group">
			<label for="exampleFormControlSelect1">Какая услуга вас интересует?</label>
			<select class="select exampleFormControlSelect1">
			<option>Сайт визитка</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
			</select>
		</div>
			<div class="form-group">
			<button type="submit" class="btn btn-primary" @click="formSubmit">Оставить заявку</button>
			</div>
			</form>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
formSubmit(e){
let mail = this.$refs.exampleInputEmail1
let tel = this.$refs.exampleInputTel1
	if(tel.value.length < 11 || !mail.value.includes("@")){
		tel.classList.add('is-invalid')
		mail.classList.add('is-invalid')
		e.preventDefault()
	}else{
		tel.classList.remove('is-invalid')
		mail.classList.remove('is-invalid')
	}

}
		}
	}
</script>
