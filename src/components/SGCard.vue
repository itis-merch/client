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
		<div class="bg-stone-200 h-68 py-2 rounded hover:bg-stone-50 active:bg-stone-50 transition duration-700 flex flex-col items-center">
			<div class="bg-white w-[90%] h-44 rounded">
				<img class="object-cover bg-no-repeat bg-center w-full h-full rounded" :src="image" alt="" srcset="">
			</div>
			<div class="text-stone-950 text-center">
				<h2 class="text-lg sg-logo-text pt-1">{{ title }}</h2>
				<h2 class="sg-logo-text pb-2">${{ price }}</h2>
				<div class="sg-nav-link min-h-[80px] font-extralight text-sm hover:text-stone-600 active:text-stone-500 text-left mx-6">{{ description }}</div>
			</div>
		</div>
	</card>
</template>

<style scoped>
</style>
