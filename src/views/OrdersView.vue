<template>
	<main class="max-w-[1200px] ml-16 mr-10 pb-12 min-h-[400px]">
		<div class="text-2xl font-bold sg-logo-text">Your orders</div>
		<div class="products pt-5 w-[80%]" v-if="products.length > 0">
				<div class="product w-full inline-table" v-for="product in products" v-bind:key="product">
					<div class="text-lg float-left w-[80%]"><div class="text-lg max-w-[40%] float-left overflow-ellipsis overflow-hidden whitespace-nowrap">{{ product.name }}</div></div>
					<div class="text-lg text-right float-left"> {{ product.amount }}</div>
					<div class="font-bold text-base float-right">${{ product.price }}</div>
				</div>
		</div>
		<p class="mt-4 text-base " v-else>You have no orders yet. Continue shopping.</p>
	</main>
  </template>
  
  <script>

  
  export default {
	components: {
	},
	data() {
	  return {
		images: [
		  'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/2yri3mroQkquV0ghSbe3',
		  'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/5t6jDwLVTi2lPRv5UbzO',
		  'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/4yiOI4tLSqWUYDUCBzF6',
		  'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/wwtYASDkS0uMfkMZWdIm',
		  'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/DA7sCaSQTKyldZjDTrQw'
		],
		products: [
				{
					id: 1,
					category_id: 1,
					name: 'Number (N)ine Destroyed Tee',
					description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
					price: '0',
					amount:5,
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
					amount: 0,
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
					amount: 2,
					images: [
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
					]
				},
				{
					id: 1,
					category_id: 1,
					name: 'Number (N)ine Destroyed Tee dcjgdcudcdgcduvdc',
					description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
					price: '606,95',
					amount: 17444,
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
					price: '60,95',
					amount: 22,
					images: [
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
						'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
					]
				}
			]
	  }
	}
  }
  </script>