<template>
  <div class="">
    <h4 class="text-xl pb-2">Add product</h4>
    <form class="max-w-[400px] flex flex-col gap-[20px]">
      <div class="flex flex-col gap-[8px]"> <!-- form group -->
        <label>Product name</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="name" required>
      </div>

      <div class="flex flex-col gap-[8px]"> <!-- form group -->
        <label>Product description</label>
        <textarea class="p-[8px]" style="color: gray" type="text" v-model="description" required/>
      </div>

      <div class="flex flex-col gap-[8px]"> <!-- form group -->
        <label>Product price</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="price" required>
      </div>

      <div class="flex flex-col gap-[8px]"> <!-- form group -->
        <label>Product quantity</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="quantity" required>
      </div>

      <div class="flex flex-col gap-[8px]"> <!-- form group -->
        <label>Product available</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="available" required>
      </div>

      <div class="flex flex-col gap-[8px]"> <!-- form group -->
        <label>Product category</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="categoryId" required>
      </div>

      <SGButton :available="true" @click="addProduct">Add</SGButton>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import SGButton from '../components/SGButton.vue'

export default {
  components: {
    SGButton
  },
  data() {
    return {
      baseUrl: 'http://45.9.73.210:8080/api/v1/products/',
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      available: false,
      categoryId: 0
    }
  },
  methods: {
    addProduct() {
      const newProduct = {
        name: this.name,
        description: this.description,
        price: this.price,
        quantity: this.quantity,
        available: this.available,
        category_id: this.categoryId
      }
      
      try {
        axios.post(this.baseUrl, newProduct, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          console.log(response)
        })
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>