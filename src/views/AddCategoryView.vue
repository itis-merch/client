<template>
  <div class="flex flex-row">
    <h4>Add category</h4>
    <form>
      <div> <!-- form group -->
        <label>Category name</label>
        <input type="text" v-model="name" required>
      </div>

      <div> <!-- form group -->
        <label>Category description</label>
        <input type="text" v-model="description" required>
      </div>
      <button type="button" @click="addCategory">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
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