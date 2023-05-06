<template>
  <main class="max-w-[1200px] p-4 flex ml-8">
    <div class="w-[65%] relative">
      <img :src="images[0]" class="w-96" alt="">
    </div>
    <div class="w-[35%]">
      <div>
        <h1 class="font-bold text-lg">{{ name }}</h1>
        <p class="mt-5">
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
import SGButton from '../components/SGButton.vue'

export default {
  components: {
    SGButton
  },
  data() {
    return {
      images: [
        'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/2yri3mroQkquV0ghSbe3',
        'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/5t6jDwLVTi2lPRv5UbzO',
        'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/4yiOI4tLSqWUYDUCBzF6',
        'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/wwtYASDkS0uMfkMZWdIm',
        'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:50/no_metadata/compress/DA7sCaSQTKyldZjDTrQw'
      ],
      name: 'Nowhereman Tee Red',
      description: 'Nowhereman red t-shirt by Number (N)ine.\nSize Men\'s / US S / EU 44-46 / 1\nColor Red\nCondition New\nMade in Japan\n10/10 new w/ tags in the package',
      price: '69.90',
      amount: 22
    }
  }
}
</script>