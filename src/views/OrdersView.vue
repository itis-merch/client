	<template>
	<main class="max-w-[1200px] ml-16 mr-10 pb-12 min-h-[400px]">
		<div class="text-2xl font-bold sg-logo-text">Your orders</div>
		<div class="products pt-5 w-[80%]" v-if="orders.length > 0">
				<div class="product w-full inline-table" v-for="order in orders" v-bind:key="order">
					<div class="text-lg float-left w-[10%]"><div class="text-lg max-w-[40%] float-left overflow-ellipsis overflow-hidden whitespace-nowrap">{{ order.id }}</div></div>
					<div class="text-lg text-right float-left"> {{ truncateText(order.products, 50) }}</div>
					<div class="font-bold text-lg float-right">${{ order.price }}</div>
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
				jwt_token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpdmFud2hlZWxAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNjg1NzI2MDgyLCJpYXQiOjE2ODU3MjQ4ODJ9.SofnMfGTTodoEHeo0QLc2xuzUAq1CXysqJ8Zq7CSE0c",
				products: [],
				orders: []
			}
		},
		methods: {
			truncateText(text, maxLength) {
				if (text.length > maxLength) {
					text = text.substring(0, maxLength - 3) + '...';
				}
				return text;
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
					const orderProducts = {
						id: response.data[i].id,
						products: "",
						price: response.data[i].total_price
					}
					
					for (let j = 0; j < response.data[i].products.length; j++) {
						await axios.get(this.baseUrl + "products/" + response.data[i].products[j].product_id)
						.then((response) => {
							orderProducts.products += j == 0 ? response.data.name : ", " + response.data.name
						})
					}
					this.orders.push(orderProducts)
				}
				console.log(this.orders)
			})
		}
	}
  </script>