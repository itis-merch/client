<script setup>
defineProps({
	image: String,
	title: String,
	price: String,
	description: String
})
</script>

<template>
	<card class="">
		<div class="bg-stone-200 w-52 h-68 py-2 rounded hover:bg-stone-50 active:bg-stone-50 transition duration-700 ">
			<div class="bg-white w-48 h-44 mr-2 ml-2 rounded p-12">
				<img :src="image" alt="" srcset="">
			</div>
			<div class="text-stone-950 text-center">
				<h2 class="text-lg sg-logo-text pt-1">{{ title }}</h2>
				<h2 class="sg-logo-text pb-2">${{ price }}</h2>
				<div class="sg-nav-link font-extralight text-sm hover:text-stone-600 active:text-stone-500">{{ description }}</div>
			</div>
		</div>
	</card>
</template>

<style scoped>

</style>