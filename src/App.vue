<template>
  <div class="navbar">
    <h1>TODO</h1>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
    </ul>
  </div>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: monospace;
}

.navbar {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  padding-right: 1rem;
  display: inline-flex;
  justify-content: space-between;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.navbar li {
  margin: 1rem;
}

.navbar a {
  padding: 1rem;
  background-color: #333;
  border-radius: 0.3rem;
  text-decoration: none;
  color: #fff;
}

.navbar .login-signup {
  padding: 10px 20px;
  border-radius: 4px;
}

h2 {
  margin: 2rem;
}
</style>
