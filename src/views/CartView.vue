<template>
	<main class="max-w-[1200px] ml-16 mr-10 text pb-12 min-h-[400px]">
		<div class="text-2xl font-bold sg-logo-text">Your cart</div>
		<div class="w-[80%]" v-if="products.length > 0">
			<div class="products pt-5 pb-10">
					<div class="product w-full inline-table" v-for="product in products" v-bind:key="product">
						<div class="text-lg float-left w-[80%]"><div class="text-lg max-w-[40%] float-left overflow-ellipsis overflow-hidden whitespace-nowrap">{{ product.name }}</div></div>
						<div class="text-lg text-right float-left"> {{ product.amount }}</div>
						<div class="font-bold text-base float-right">${{ product.totalPrice }}</div>
					</div>
			</div>
			<SGButton class="w-[20%] min-w-[100px] align-middle text-center absolute right-0 font-semibold">Checkout</SGButton>
		</div>
		<p class="text-base mt-5" v-else>You have no items in your cart. Continue shopping.</p>
	</main>
  </template>
  
  <script>
	import SGButton from '../components/SGButton.vue'
	import axios from 'axios'
  
  export default {
	mounted() {
		try {
			
			axios.get(this.baseURL + "cart", {
				headers: {
					Authorization: 'Bearer ' + this.jwtToken
				}
			})
			.then((response) => {
				this.cart = response.data.products;
				console.log(this.cart);
				for(var i = 0; i < this.cart.length; i++) {
					this.product.amount = this.cart[i].quantity;

					axios.get(this.baseURL + "products/" + this.cart[i].product_id)
					.then((response) => {
						const data = response.data;
						this.product.name = data.name;
						this.product.totalPrice = data.price * this.product.amount;
					})

					this.products.push(this.product);
				}
			})
		} catch(error) {
			console.log(error);
		}
	},

	components: {
		SGButton
	},
	data() {
	  return {

		jwtToken: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpdmFud2hlZWxAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNjg1NjkyNzAzLCJpYXQiOjE2ODU2OTE1MDN9.LA24JVmG4AK4LiVmIriB-MmzTD_RAw8CKDwRoJSnUmE',
		baseURL: 'http://45.9.73.210:8080/api/v1/',
		cart: null,
		images: [
		  'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/2yri3mroQkquV0ghSbe3',
		  'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/5t6jDwLVTi2lPRv5UbzO',
		  'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/4yiOI4tLSqWUYDUCBzF6',
		  'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/wwtYASDkS0uMfkMZWdIm',
		  'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/DA7sCaSQTKyldZjDTrQw'
		],
		// products: [
		// 		{
		// 			id: 1,
		// 			category_id: 1,
		// 			name: 'Number (N)ine Destroyed Tee',
		// 			description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
		// 			price: '0',
		// 			amount:5,
		// 			images: [
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
		// 			]
		// 		},
		// 		{
		// 			id: 1,
		// 			category_id: 1,
		// 			name: 'Number (N)ine Destroyed Tee',
		// 			description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
		// 			price: '606,95',
		// 			amount: 0,
		// 			images: [
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
		// 			]
		// 		},
		// 		{
		// 			id: 1,
		// 			category_id: 1,
		// 			name: 'Number (N)ine Destroyed Tee',
		// 			description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
		// 			price: '606,95',
		// 			amount: 2,
		// 			images: [
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
		// 			]
		// 		},
		// 		{
		// 			id: 1,
		// 			category_id: 1,
		// 			name: 'Number (N)ine Destroyed Tee dcjgdcudcdgcduvdc',
		// 			description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
		// 			price: '606,95',
		// 			amount: 17444,
		// 			images: [
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
		// 			]
		// 		},
		// 		{
		// 			id: 1,
		// 			category_id: 1,
		// 			name: 'Number (N)ine Destroyed Tee',
		// 			description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
		// 			price: '60,95',
		// 			amount: 22,
		// 			images: [
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
		// 				'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
		// 			]
		// 		}
		// 	]
		products: [], 
		product: {
			name: '',
			amount: 0, 
			totalPrice: 0
		}
	  }
	}
  }
  </script>