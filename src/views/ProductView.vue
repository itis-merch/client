<template>
  <main class="max-w-[1200px] p-4 flex ml-8">
    <div class="w-[45%] relative">
      <img :src="images[0]" class="w-96" alt="">
    </div>
    <div class="w-[35%]">
      <div>
        <h1 class="font-bold text-lg">{{ name }}</h1>
        <p class="mt-5">
          <pre class="w-[500px] whitespace-pre-wrap text-justify  ">{{ description }}</pre>
        </p>
      </div>
      <div class="mt-5">
        <p class="font-bold">${{ price }}</p>
        <!-- <SGButton v-if="amount">Add to cart</SGButton> -->
        <SGButton class="mt-5" :available="amount > 0" alt-text="Out of stock">Add to cart</SGButton>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import SGButton from '../components/SGButton.vue'

export default {
  components: {
    SGButton
  },
  mounted() {
    try {
      axios.get(this.baseUrl + this.$route.params.id)
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.images.push(data.image_urls[0]);
        this.name = data.name;
        this.price = data.price;
        this.amount = data.quantity;
        this.description = data.description;
      })
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      baseUrl: 'http://45.9.73.210:8080/api/v1/products/',
      images: [],
      name: '',
      description: '',
      price: '',
      amount: 0
    }
  }
}
</script>

<style scoped>
pre {
  width: 500px;
  word-wrap: break-word;
}
</style>