<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import CreateTask from "./CreateTask.vue";
import Task from "./Task.vue";

const allTasks = ref([]);

const addTask = (task) => {
  allTasks.value.push({
    id: uuidv4(),
    task,
    isCompleted: null,
    isEditing: null,
  });
};
</script>

<template>
  <main>
    <h1 class="text-center text-xl font-bold text-primary">Create a Task</h1>
    <CreateTask @new-task="addTask" />
    <ul>
      <Task v-for="task in allTasks" :task="task"/>
    </ul>
  </main>
</template>
