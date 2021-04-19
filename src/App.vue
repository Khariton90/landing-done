<template>
  <div id="app">
  	
<transition name="fade" mode="out-in">
    <router-view/>
 </transition>
  </div>
</template>

<script>


  export default {

data(){
	return{

}
},
methods:{
}
}

</script>

<style>
.fade-enter-active,.fade-leave-active{
	transition: opacity .2s linear;
	opacity: 1;
}
.fade-leave-to,.fade-enter{
	opacity: 0.3;
	transition: opacity .2s linear;
}
</style>
