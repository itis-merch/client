<script setup>
defineProps({
  available: Boolean,
  altText: String
})
</script>

<template>
  <button
    v-if="available"
    class="bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-300 text-stone-900 py-2 px-6 transition duration-300 rounded"
  >
    <slot />
  </button>
  <button
    v-else
    class="bg-stone-300 text-stone-900 py-2 px-6 rounded cursor-not-allowed"
  >
    {{ altText }}
  </button>
</template>

<style scoped>
button {
  font-family: 'VkSansDisplay-Bold';
}
</style>
