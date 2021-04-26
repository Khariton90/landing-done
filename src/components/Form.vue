<template>
				<form @submit.prevent="submitOn">
			<div class="form-group">
			<label for="exampleInputEmail1">Оставьте заявку и получите <br>
			консультацию профессионального <br>
			маркетолога</label>
			<input type="email" class="form-control" placeholder="Email"ref="exampleInputEmail1"
			v-model.trim="email"
			:class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
			>
			<small 
			class="invalid_tooltip invalid"
			v-if="$v.email.$dirty && !$v.email.required"
			>Email не должен быть пустым
			</small>
			<small 
			class="invalid_tooltip invalid"
			v-else-if="$v.email.$dirty && !$v.email.email"
			>Введите корректный Email
			</small>
			</div>
			<div class="form-group">
	<input type="tel" class="form-control" ref="exampleInputTel1" 
	:value="value"
	v-imask="mask"
	:class="{invalid: ($v.value.$dirty && value.length < 18 && value.length > 1) || ($v.value.$dirty && value.length === 0)}"
	@accept="onAccept"
	@complete="onComplete"
	placeholder="Телефон"
	>
			<small 
			class="invalid_tooltip invalid"
			v-if="$v.value.$dirty && value.length < 18 && value.length > 1"
			>Ещё {{18 - value.length}} символов
			</small>
			<small 
			class="invalid_tooltip invalid"
			v-else-if="$v.value.$dirty && value.length === 0"
			>Телефон не должен быть пустым
			</small>
			</div>
			<div class="form-group">
			<label for="exampleFormControlSelect1">Какая услуга вас интересует?</label>
			<select class="select exampleFormControlSelect1" 
			@change="changeCallStatus($event)"
			>
			<option 
			v-for="(site, index) in siteVersion" 
			:value="site" 
			:key="index">
			{{ site }}
			</option>
			</select>
		</div>
			<div class="form-group">
			<button type="submit" class="btn btn-primary">Оставить заявку</button>
			</div>
			</form>
</template>

<script>
  import {IMaskDirective} from 'vue-imask';
  import {email, required} from 'vuelidate/lib/validators'
	export default {
		name: 'Form',
		data(){
			return {
				siteVersion: [
				'Сайт визитка',
				'Лендинг',
				'Промосайт',
				'Корпоративный сайт',
				'Интернет-магазин',
				],
        value: '',
        email: '',
        site: 'Сайт визитка',
        selected: this.siteVersion,
        mask: {
          mask: '{+7} (000) 000-00-00',
          lazy: true
},
}
},
		validations: {
email: { email, required },
value: { required }
		},
		methods:{
			changeCallStatus(event){
 this.site = event.target.value
},
			submitOn(){
				if(this.$v.$invalid){
					this.$v.$touch()
					console.log(this.selected)
					return
				}else{
				const formData  = {
					email: this.email,
					telephone: this.value,
					site: this.site
				}
				alert('Сообщение отправлено, мы с вами свяжемся в ближайшее время')
				console.log(formData)
				window.location.reload()

				}
			},
        onAccept (e) {
          const maskRef = e.detail;
          this.value = maskRef.value;

     },
        onComplete (e) {
          const maskRef = e.detail;
          maskRef.unmaskedValue
        },
		},
    directives: {
      imask: IMaskDirective
    }
	}
</script>
