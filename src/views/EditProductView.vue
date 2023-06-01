<template>
  <div class="">
    <h4>Edit product</h4>
    <form>
      <div>
        <label>Product name</label>
        <input type="text" v-model="name">
      </div>
      <div>
        <label>Product description</label>
        <input type="text" v-model="description">
      </div>
      <div>
        <label>Product price</label>
        <input type="text" v-model="price">
      </div>
      <div>
        <label>Product quantity</label>
        <input type="text" v-model="quantity">
      </div>
      <div>
        <label>Product available</label>
        <input type="text" v-model="available">
      </div>
      <div>
        <label>Product category ID</label>
        <input type="text" v-model="categoryID">
      </div>
      <button type="button" @click="editProduct">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
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