<script setup>
import {RouterView} from 'vue-router'
import SGHeader from './components/SGHeader.vue'
import SGFooter from './components/SGFooter.vue'
import SGSideBar from './components/SGSidebar.vue'
</script>

<template>
  <!-- <header class="mt-5">
    <SGHeader />
  </header>

  <main>
    <div>
      <SGSideBar />
    </div>
    <div>
      <RouterView />
    </div>
  </main>

  <footer>
    <SGFooter />
  </footer> -->
  <!--  <div class="flex flex-col">-->
  <SGHeader class="mb-[92px] w-full fixed top-0 z-10"/>
  <main class="main-content flex flex-1">
    <SGSideBar class="fixed top-[188px] left-[112px]" />
    <div class="top-[188px] left-[400px] w-[76.5%]">
      <div class="dynamic-content">
        <RouterView/>
      </div>
      <SGFooter/>
    </div>
  </main>
  <!--  </div>-->
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

/* nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
