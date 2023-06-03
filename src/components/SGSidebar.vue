<script setup>
</script>

<template>
  <div class="flex flex-row">
    <!-- <div class="mt-3 w-16">
      <img src="../assets/barcode.png" alt="your-image" class="inline-flex">
    </div> -->
    <nav class="w-64 flex-shrink-0 h-screen">
      <ul class="flex flex-col">
        <li class="px-3 py-2 text-stone-800 hover:text-stone-900">
          <router-link :to="{ path: '/'}">New Arrivals</router-link>
        </li>
        <li class="px-3 py-2 text-stone-800 hover:text-stone-900">
          <router-link to="/" href="#">Categories</router-link>
        </li>
        <div  v-for="category in categories" :key="category.id">
          <li class="px-3 py-2 text-stone-800 hover:text-stone-900 ml-5">
            <router-link :to="{ name: 'productCategoryPage', params: { id: category.id } }">
              {{ category.name }}
            </router-link>
          </li>
        </div>
        <!-- <li class="px-3 py-2 text-stone-800 hover:text-stone-900 ml-5">
          <router-link to="/" href="#">Hoodies</router-link>
        </li>
        <li class="px-3 py-2 text-stone-800 hover:text-stone-900 ml-5">
          <router-link to="/" href="#">T-Shirts</router-link>
        </li>
        <li class="px-3 py-2 text-stone-800 hover:text-stone-900 ml-5">
          <router-link to="/" href="#">Sweatshirts</router-link>
        </li>
        <li class="px-3 py-2 text-stone-800 hover:text-stone-900 ml-5">
          <router-link to="/" href="#">Stickers</router-link>
        </li> -->
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: stretch;
}
</style>

<script>
import axios from 'axios'

export default {
  name: 'SideBar',
  data() {
    return {
      categories: []
    }
  },
  components: {},
  mounted() {
    axios.get('http://45.9.73.210:8080/api/v1/categories')
    .then((response) => {
      this.categories = response.data
    })
  }
}
</script>
