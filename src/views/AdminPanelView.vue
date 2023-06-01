<template>
  <div v-if="role==='ADMIN'">
    <h1>Admin panel</h1>
  </div>
  <div v-else>
    <p>You do not have access to view this forum.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: ''
    }
  },
  methods: {
    parseJwt(token) {
      return JSON.parse(atob(token.split('.')[1]));
    },
    extractUserRole(token) {
      return this.parseJwt(token).role;
    }
  },
  mounted() {
    const token = localStorage.getItem('jwtToken');
    this.role = this.extractUserRole(token);
  }
}
</script>