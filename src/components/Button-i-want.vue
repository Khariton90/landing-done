<template>
	<button id="iWant" class="btn btn-primary" @click="iWantSite">Хочу похожий</button>
</template>

<script>
	export default{
		name: 'ButtonIWant',
		data(){
			return{

			}
		},
methods:{
	iWantSite(){
		alert('Хочу такой')
	}
	}
}
</script>