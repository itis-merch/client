<template>
  <div v-if="role==='ADMIN'">
    <h1 class="sg-logo-text text-2xl">Admin panel</h1>
    <div class="categories-panel">
      <li v-for="category in categories" v-bind:key="category">
        {{ category.name }}
      </li>
    </div>
  </div>
  <div v-else>
    <p>You do not have access to view this forum.</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      baseUrl: 'http://45.9.73.210:8080/api/v1/',
      token: '',
      role: '',
      categories: [],
      products: [],
    }
  },
  methods: {
    parseJwt(token) {
      return JSON.parse(atob(token.split('.')[1]));
    },
    extractUserRole(token) {
      return this.parseJwt(token).role;
    }
  },
  mounted() {
    this.token = localStorage.getItem('jwtToken');
    this.role = this.extractUserRole(this.token);

    try {
      axios.get(this.baseUrl + "categories", {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
      })
      .then((response) => {
        this.categories = response.data;
        // console.log(this.categories)
        
        this.categories.forEach((category) => {
          // console.log(category.products)
          category.products.forEach((product) => {
            this.products.push(product)
          })
        })
        console.log(this.products)
      })
    } catch (error) {
      console.log(error);
    }
    
  }
}
</script>