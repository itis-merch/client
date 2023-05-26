<template>
  <main class="max-w-[1200px] p-4 flex ml-8">
    <div class="w-[45%] relative">
      <img :src="images[0]" class="w-96" alt="">
    </div>
    <div class="w-[35%]">
      <div>
        <h1 class="font-bold text-lg">{{ name }}</h1>
        <p class="mt-5 text-left ">
          <pre>{{ description }}</pre>
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
      axios.get(this.baseUrl + this.$route.params.id, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpdmFud2hlZWxAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNjg1MTExNzgxLCJpYXQiOjE2ODUxMTA1ODF9.IKv2fn6EuEL-4vjKF0unS4M3Qot3LBP5o7j5Z8k3dUs'
        }
      })
      .then((response) => {
        console.log(response);
        const data = response.data;
        this.images.push(data.image_urls[0]);
        this.name = data.name;
        this.price = data.price;
        this.quantity = data.quantity;
        this.description = data.description;
      })
    } catch (error) {
      console.log(error);
    }
  },
  // async created() {
  //   const result = await this.getProduct();
  //   console.log(result);
  // },
  // methods: {
  //   async getProduct() {
  //     console.log(this.$route.params.id)
  //     try {
  //       await axios.get(this.baseUrl + this.$route.params.id, {
  //         headers: {
  //           'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpdmFud2hlZWxAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNjg1MTA4MzgxLCJpYXQiOjE2ODUxMDcxODF9.W8suuCwCfsPGXzo9BShYGWyXtp3Tk8_gQL_ooRLhuQw',
  //         }
  //       })
  //       .then((response) => {
  //         return response.data;
  //       })
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // },
  data() {
    return {
      baseUrl: 'http://45.9.73.210:8080/api/v1/products/',
      // images: [
      //   'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/2yri3mroQkquV0ghSbe3',
      //   'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/5t6jDwLVTi2lPRv5UbzO',
      //   'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/4yiOI4tLSqWUYDUCBzF6',
      //   'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/wwtYASDkS0uMfkMZWdIm',
      //   'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/DA7sCaSQTKyldZjDTrQw'
      // ],
      // name: 'Nowhereman Tee Red',
      // description: 'Nowhereman red t-shirt by Number (N)ine.\nSize Men\'s / US S / EU 44-46 / 1\nColor Red\nCondition New\nMade in Japan\n10/10 new w/ tags in the package',
      // price: '69.90',
      // amount: 22
      images: [],
      name: '',
      description: '',
      price: '',
      amount: 0
    }
  }
}
</script>