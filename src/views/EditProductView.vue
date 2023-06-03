<template>
  <div class="">
    <h4 class="text-xl pb-2">Edit product</h4>
    <form class="max-w-[400px] flex flex-col gap-[20px]">
      <div class="flex flex-col grap-[8px]">
        <label>Product name</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="name">
      </div>
      <div class="flex flex-col grap-[8px]">
        <label>Product description</label>
        <textarea class="p-[8px]" style="color: gray" type="text" v-model="description"/>
      </div>
      <div class="flex flex-col grap-[8px]">
        <label>Product price</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="price">
      </div>
      <div class="flex flex-col grap-[8px]">
        <label>Product quantity</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="quantity">
      </div>
      <div class="flex flex-col grap-[8px]">
        <label>Product available</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="available">
      </div>
      <div class="flex flex-col grap-[8px]">
        <label>Product category ID</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="categoryID">
      </div>
      <SGButton :available="true" @click="editProduct">Edit</SGButton>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import SGButton from '../components/SGButton.vue'

export default {
  components: {
    SGButton
  },
  data() {
    return {
      baseUrl: 'http://45.9.73.210:8080/api/v1/products/',
      id: 0,
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      available: false,
      categoryID: 0
    }
  },
  mounted() {
    try {
      axios.get(this.baseUrl + this.$route.params.id)
      .then((response) => {
        const product = response.data
        this.id = this.$route.params.id
        this.name = product.name
        this.description = product.description
        this.price = product.price
        this.quantity = product.quantity
        this.available = product.available
        this.categoryID = product.category_id
      })
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    editProduct() {
      const updatedProduct = {
        name: this.name,
        description: this.description,
        price: this.price,
        quantity: this.quantity,
        available: this.available,
        category_id: this.categoryID
      }
      try {
        axios.post(this.baseUrl + this.id, updatedProduct, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          console.log(response.data)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>