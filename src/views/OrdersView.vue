	<template>
	<main class="max-w-[1200px] ml-16 mr-10 pb-12 min-h-[400px]">
		<div class="text-2xl font-bold sg-logo-text">Your orders</div>
		<div class="products pt-5 w-[80%]" v-if="products.length > 0">
				<div class="product w-full inline-table" v-for="product in products" v-bind:key="product">
					<div class="text-lg float-left w-[10%]"><div class="text-lg max-w-[40%] float-left overflow-ellipsis overflow-hidden whitespace-nowrap">{{ product.id }}</div></div>
					<div class="text-lg text-right float-left"> {{ product.products }}</div>
					<div class="font-bold text-base float-right">${{ product.cost }}</div>
				</div>
		</div>
		<p class="mt-4 text-base " v-else>You have no orders yet. Continue shopping.</p>
	</main>
  </template>
  
  <script>
	import axios from "axios";
  export default {
		components: {},
		data() {
			return {
				baseUrl: "http://45.9.73.210:8080/api/v1/",
				jwt_token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpdmFud2hlZWxAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNjg1NzE5NjY0LCJpYXQiOjE2ODU3MTg0NjR9.XY2o34WeJa30U7c48843crzQmfs6q4q4i4UO_FaTJIQ",
				products: []
			}
		},
		async mounted() {
			await axios.get(this.baseUrl + "cart/order", {
				headers: {
					'Authorization': `Bearer ${this.jwt_token}`
				}
			})
					.then(async (response) => {
						for (let i = 0; i < response.data.length; i++) {
							let productId = response.data[i].id
							let products = "";
							let cost = response.data[i].total_price
							for (let j = 0; j < response.data[i].products.length; j++) {
								let name = ""
								await axios.get(this.baseUrl + "products/" + (j + 1))
										.then((response) => {
											name = response.data.name
										})
								if (j != (response.data[i].products.length - 1))
									products += name + ", "
								else
									products += name
							}
							this.products.push({
								id: productId,
								products: products,
								cost: cost
							})
						}
					})
		}
	}
  </script>