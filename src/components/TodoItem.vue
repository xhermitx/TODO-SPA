<template>
  <div class="cards">
    <div v-for="_ in store.tasks" class="card" :key="_.taskName">
      <h3>
        <span>{{ _.taskName.toUpperCase() }}</span>
        <hr />
        <span>BY {{ _.taskDeadline }}</span>
      </h3>
      <button @click="completeTask" class="completed-button" :id="_.taskName">
        DONE
      </button>
      <button @click="deleteTask" class="completed-button" :id="_.taskName">
        DELETE
      </button>
    </div>
  </div>
</template>

<script setup>
import { taskStore } from "@/stores/taskList";

const store = taskStore();

const completeTask = (event) => {
  // console.log(event.target.parentElement.className);
  event.target.parentElement.className = "completed-card";
  event.target.style = "display: none";
};

const deleteTask = (event) => {
  console.log(event.target.id);
  store.deleteTask(event.target.id);
};
</script>

<style scoped>
h3 {
  width: 9rem;
  height: 3rem;
  color: #333;
}
.completed-card {
  margin-top: 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
}

.cards {
  margin-bottom: 2rem;
}
.cards .card {
  display: flex;
  justify-content: space-around;
  border: 0.1rem solid #ccc;
  border-radius: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.2);
  transition: 0.4s ease-in-out;
}

.cards .card:hover {
  cursor: pointer;
  transform: scale(1.05, 1.05);
}

.cards:hover > .card:not(:hover) {
  /* filter: blur(0.05rem); */
  transform: scale(1, 1);
}

.completed-button {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  border-radius: 1rem;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 0.1rem solid transparent;
  letter-spacing: 0.1rem;
  /* min-width: 160px; */
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 1rem;
  color: #616467;
  box-shadow: inset 0 0 0 2px #616467;
  background-color: transparent;
  margin: 2rem 1rem;
}

.completed-button:hover {
  color: #fff;
  background-color: #616467;
}
</style>
@/stores/taskList
