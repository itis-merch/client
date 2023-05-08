<template>
	<main class="max-w-[3000px] p-4 ml-8">
		<div class="text-2xl font-bold">Your orders</div>
		<table class="table-auto min-w-full">
			<div class="products pt-5">
				<tbody class="min-w-full">
					<div class="product" v-for="product in products" v-bind:key="product">
						<tr class="w-full">
							<td class="text-lg pr-10 w-[50%]">{{ product.name }}</td>
							<td class="text-lg">{{ product.amount }}</td>
							<td class="font-bold">${{ product.price }}</td>
						</tr>
					</div>
				</tbody>
			</div>
		</table>
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
					price: '606,95',
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
					amount: 17,
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