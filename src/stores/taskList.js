import { ref } from "vue";
import { defineStore } from "pinia";

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const taskStore = defineStore("task", () => {
  const tasks = ref([
    {
      taskName: "Pay bills",
      taskDeadline: "23-06-2023",
    },
  ]);

  //ADD NEW TASK
  const addTask = ({ taskName, taskDeadline }) => {
    //Create a new instance and push it to the list
    const newTask = {
      taskName: taskName,
      taskDeadline: taskDeadline,
    };
    tasks.value.push(newTask);
  };

  //DELETE A TASK
  const deleteTask = (taskName) => {
    tasks.value = tasks.value.filter((task) => task.taskName !== taskName);
    console.log(tasks.value);
  };
  return { tasks, addTask, deleteTask };
});
