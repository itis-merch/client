<template>
	<transition :name="transitionEffect">
		<div
				class="carousel-item"
				v-show="currentSlide === index"
		>
		<img :src="slide" alt="Photo"/>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		slide: String,
		currentSlide: Number,
		index: Number,
		direction: String,
	},
	computed: {
		transitionEffect() {
			return this.direction === "right" ? "slide-out" : "slide-in";
		},
	}
}
</script>

<style scoped>
.carousel-item {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 800px;
  width: 1200px;
  overflow: hidden;
}

img {
	height: 100%;
  width: auto;
  object-fit: cover;
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
	transition: all 1s ease-in-out;
}
.slide-in-enter-from {
	transform: translateX(-100%);
}
.slide-in-leave-to {
	transform: translateX(100%);
}
.slide-out-enter-from {
	transform: translateX(100%);
}
.slide-out-leave-to {
	transform: translateX(-100%);
}
</style>