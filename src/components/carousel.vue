<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      background=""
      noWrap
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="cart of carts"
 
      >
      <img class="main"      v-on:mouseover="cart.isActive = true"
		v-on:mouseleave="cart.isActive = false" :src="cart.image" alt="">
      <div      v-on:mouseover="cart.isActive = true"
		v-on:mouseleave="cart.isActive = false"class="describe__job":class="{active: cart.isActive}">
      			<span v-on:click="$router.push({ name: `${cart.name}`})" :class="{active: cart.isActive}" class="describe__title" >{{ cart.title }}</span>
      					<div class="about__this" :class="{active: cart.isActive}">
      						<p v-if="cart.isActive" v-html="cart.about"></p>
		<p v-else></p>
		</div>
      </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
  	props: ['carts'],
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
    	active(){
    	},
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
.wrapper{
	padding: 0 14px;
}
.carousel-caption {
text-align:left;
}
.carousel-control-prev, .carousel-control-next {
    width: 45px!important;
    height: 100%;
    z-index:10!important;
}
.carousel-control-prev{
	left:-10px!important;
	background:url(../assets/Group_47.svg) no-repeat center center;
}
.carousel-control-next{
	right:-10px!important;
	background:url(../assets/Group_46.svg) no-repeat center center;
}

</style>