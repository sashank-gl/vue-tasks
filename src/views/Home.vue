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

const toggleTaskCompletion = (taskIndex) => {
  allTasks.value[taskIndex].isCompleted =
    !allTasks.value[taskIndex].isCompleted;
};

const editTask = (taskIndex) => {
  allTasks.value[taskIndex].isEditing = !allTasks.value[taskIndex].isEditing;
};

const updateTask = (taskIndex, taskValue) => {
  allTasks.value[taskIndex].task = taskValue;
};

const deleteTask = (taskId) => {
  allTasks.value = allTasks.value.filter((task) => task.id !== taskId);
};

const saveToLocal = () => {
  localStorage.setItem("all-tasks", JSON.stringify(allTasks.value));
};

</script>

<template>
  <main>
    <h1 class="text-center text-xl font-bold text-primary">Create a Task</h1>
    <CreateTask @new-task="addTask" />
    <ul v-if="allTasks.length > 0">
      <Task
        v-for="(task, index) in allTasks"
        :task="task"
        :index="index"
        @toggle-complete="toggleTaskCompletion"
        @edit-task="editTask"
        @update-task="updateTask"
        @delete-task="deleteTask"
      />
    </ul>
    <p v-else>No Tasks</p>
  </main>
</template>
