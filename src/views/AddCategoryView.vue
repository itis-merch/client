<template>
  <div class="">
    <h4 class="text-xl pb-2">Add category</h4>
    <form class="max-w-[400px] flex flex-col gap-[20px]">
      <div class="flex flex-col gap-[8px]"> <!-- form group -->
        <label>Category name</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="name" required>
      </div>

      <div class="flex flex-col gap-[8px]"> <!-- form group -->
        <label>Category description</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="description" required>
      </div>
      <SGButton :available="true" @click="addCategory">Add</SGButton>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import SGButton from '../components/SGButton.vue'

export default {
  components: {
    SGButton
  },
  data() {
    return {
      baseUrl: 'http://45.9.73.210:8080/api/v1/categories/',
      name: '',
      description: '',
    }
  },
  methods: {
    addCategory() {
      const newCategory = {
        name: this.name,
        description: this.description
      }

      try {
        axios.post(this.baseUrl, newCategory, {
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