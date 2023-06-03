<template>
    <div class="flex flex-col max-w-[82%]">
        <SGCarousel :slides="images" class="mb-10 w-full"/>
        <div class="new-arrivals">
            <h1 class="font-bold sg-logo-text text-2xl">New Arrivals</h1>
            <div class="products grid grid-cols-3 gap-[40px]">
                <div class="product mt-5" v-for="product in products" v-bind:key="product">
									<RouterLink :to="{ name: 'productPage', params: { id: product.id } }">
                    <SGCard class="" :title="formatText(product.name, 18)" :description="formatText(product.description, 60)" :image="product.image_urls[0]" :price="product.price" />
									</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SGCarousel from '../components/SGCarousel.vue'
import SGCard from '../components/SGCard.vue';
import axios from 'axios';

export default {
	mounted() {
		try {
			axios.get(this.baseUrl + "products")
			.then((response) => {
				console.log(response.data[0]);
				this.products = [...response.data];
			})
		} catch (error) {
			console.log(error);
		}
	},
	methods: {
		formatText(text, maxLength) {
			let formattedText;

			if (text.length > maxLength) {
				formattedText = text.slice(0, maxLength) + '...';
			} else {
				return text;
			}

			return formattedText;
		}
	},
	data() {
		return {
			baseUrl: 'http://45.9.73.210:8080/api/v1/',
			products: [],
			
			images: [
				'https://sun9-50.userapi.com/impg/sJikmHJNXSdg5gImrwhJCtwpV5EhrizSMmtxsQ/j8QjCGV93C0.jpg?size=1733x1263&quality=95&sign=b7c715778bb1813a1d8e08aeda064ab4&type=album',
				'https://sun9-32.userapi.com/impg/_RAUgMvuOglLajSPY1vl7I7OPq4DBeDnEeK06g/3V2qyu7ZpYA.jpg?size=1179x853&quality=95&sign=00c2d4bc5b15f8a5c1d9dc3709c41161&type=album',
				'https://sun9-2.userapi.com/impg/E6Et7SqK0LPzCteZlZ_n8iJ9isgpivBoGVv3fg/GxrNZE-aqKE.jpg?size=1200x800&quality=95&sign=a0b346b87084715669e31f5b5d9797a7&type=album'
			],
			/*
			products: [
				{
					id: 1,
					category_id: 1,
					name: 'Number (N)ine Destroyed Tee',
					description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
					price: '606,95',
					images: [
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
					]
				},
				{
					id: 1,
					category_id: 1,
					name: 'Number (N)ine Destroyed Tee',
					description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
					price: '606,95',
					images: [
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
					]
				},
				{
					id: 1,
					category_id: 1,
					name: 'Number (N)ine Destroyed Tee',
					description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
					price: '606,95',
					images: [
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
					]
				},
				{
					id: 1,
					category_id: 1,
					name: 'Number (N)ine Destroyed Tee',
					description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
					price: '606,95',
					images: [
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
					]
				},
				{
					id: 1,
					category_id: 1,
					name: 'Number (N)ine Destroyed Tee',
					description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
					price: '606,95',
					images: [
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
					]
				},
				{
					id: 1,
					category_id: 1,
					name: 'Number (N)ine Destroyed Tee',
					description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
					price: '606,95',
					images: [
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
					]
				}
			]
			*/
		}
	},
	components: {
		SGCarousel,
		SGCard
	}
}
</script>
