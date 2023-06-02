<template>
  <div class="flex flex-row">
    <h4>Add product</h4>
    <form>
      <div> <!-- form group -->
        <label>Product name</label>
        <input type="text" v-model="name" required>
      </div>

      <div> <!-- form group -->
        <label>Product description</label>
        <input type="text" v-model="description" required>
      </div>

      <div> <!-- form group -->
        <label>Product price</label>
        <input type="text" v-model="price" required>
      </div>

      <div> <!-- form group -->
        <label>Product quantity</label>
        <input type="text" v-model="quantity" required>
      </div>

      <div> <!-- form group -->
        <label>Product available</label>
        <input type="text" v-model="available" required>
      </div>

      <div> <!-- form group -->
        <label>Product category</label>
        <input type="text" v-model="categoryId" required>
      </div>

      <button type="button" @click="addProduct">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"

export default {
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