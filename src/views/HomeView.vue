<template>
  <div class="body">
    <header>
      <TodoItem />
      <!-- <RouterLink to="/drive">Drive</RouterLink> -->
      <AddTask />
    </header>
  </div>
</template>

<script setup>
import TodoItem from "../components/TodoItem.vue";
import AddTask from "../components/AddTask.vue";
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
}

img {
  border: 1px solid #000;
  align-self: center;
  box-shadow: 0.5rem 0.5rem 1rem #000;
}
</style>
