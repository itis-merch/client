<template>
  <div class="">
    <h4>Edit category</h4>
    <form>
      <div> <!-- form group -->
        <label>Category name</label>
        <input type="text" v-model="name">
      </div>

      <div> <!-- form group -->
        <label>Category description</label>
        <input type="text" v-model="description">
      </div>
      <button type="button" @click="editCategory">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      baseUrl: 'http://45.9.73.210:8080/api/v1/categories/',
      id: 0,
      name: '',
      description: '',
    }
  },
  mounted() {
    console.log(localStorage.getItem('jwtToken'))
    try {
      axios.get(this.baseUrl + this.$route.params.id)
      .then((response) => {
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
        axios.post(this.baseUrl + this.id, updatedCategory, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          console.log(response.data)
        })
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>