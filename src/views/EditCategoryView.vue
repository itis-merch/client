<template>
  <div class="">
    <h4 class="text-xl pb-2">Edit category</h4>
    <form class="max-w-[400px] flex flex-col gap-[20px]">
      <div class="flex flex-col gap-[8px]">
        <!-- form group -->
        <label>Category name</label>
        <input class="p-[8px]" style="color: gray" type="text" v-model="name" />
      </div>

      <div class="flex flex-col gap-[8px]">
        <!-- form group -->
        <label>Category description</label>
        <textarea class="p-[8px]" style="color: gray" v-model="description" />
      </div>
      <SGButton :available="true" @click="editCategory">Edit</SGButton>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import SGButton from '../components/SGButton.vue'

export default {
  components: {
    SGButton
  },
  data() {
    return {
      baseUrl: 'http://45.9.73.210:8080/api/v1/categories/',
      id: 0,
      name: '',
      description: ''
    }
  },
  mounted() {
    console.log(localStorage.getItem('jwtToken'))
    try {
      axios.get(this.baseUrl + this.$route.params.id).then((response) => {
        const category = response.data
        this.id = this.$route.params.id
        this.name = category.name
        this.description = category.description
      })
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    editCategory() {
      const updatedCategory = {
        name: this.name,
        description: this.description
      }
      try {
        axios
          .post(this.baseUrl + this.id, updatedCategory, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            console.log(response.data)
          })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
