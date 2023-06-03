<template>
  <main class="max-w-[1200px] flex mb-10">
    <div class="w-[45%] relative">
      <img :src="images[0]" class="w-96" alt="">
    </div>
    <div class="w-[35%]">
      <div>
        <h1 class="sg-logo-text text-2xl">{{ name }}</h1>
        <p class="mt-5">
          <pre class="max-w-[100%] whitespace-pre-wrap text-justify">{{ description }}</pre>
        </p>
      </div>
      <div class="mt-5">
        <p class="font-bold">${{ price }}</p>
        <!-- <SGButton v-if="amount">Add to cart</SGButton> -->
        <SGButton @click="addToCart" class="mt-5" :available="amount > 0" alt-text="Out of stock">Add to cart</SGButton>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import SGButton from '../components/SGButton.vue'
import swal from 'sweetalert';

export default {
  components: {
    SGButton
  },
  methods: {
    addToCart() {
      if (localStorage.getItem("jwtToken") == null) {
        window.location.href = '/login'
        return
      }
      console.log(this.jwtToken)
      const shoppingCartItem = {
        quantity: 1,
        product_id: this.$route.params.id
      }
      axios.post('http://45.9.73.210:8080/api/v1/cart/add', shoppingCartItem, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + this.jwtToken
        }
      }).then((response) => {
        console.log(response)
        swal({
          text: "Product was added to your cart successfully!",
          icon: "success",
          closeOnClickOutside: true
        })
      })
    }
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
      amount: 0,
      jwtToken: localStorage.getItem('jwtToken')
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