<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <input
        v-model="newTask.taskName"
        type="text"
        class="form-input"
        placeholder="Enter a new Task"
        required
      />
      <input
        v-model="newTask.taskDeadline"
        type="date"
        class="form-input"
        placeholder="Enter a new Task"
        required
      />
      <button class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { taskStore } from "@/stores/taskList";

const taskList = taskStore();

const newTask = ref({
  taskName: "",
  taskDeadline: "",
});

const onSubmit = () => {
  taskList.addTask(newTask.value);
  newTask.value.taskName = "";
  newTask.value.taskDeadline = "";
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 2rem;
}

.form-container {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.2);
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #a5d6a7;
}

.submit-button {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
@/stores/taskList
