<script setup>
import { ref } from "vue";

const task = ref("");
const hasError = ref(false);

const emit = defineEmits(["new-task"]);

const createTask = () => {
  if (task.value !== "") {
    emit("new-task", task.value);
    task.value = "";
    hasError.value = false;
  } else {
    hasError.value = true
    setTimeout(() => {
      hasError.value = false;
    }, 2000);
  }
};
</script>

<template>
  <div class="container mx-auto">
    <input
      class="border focus:outline-none focus:border-primary focus:border-2"
      v-model="task"
      type="text"
    />
    <button @click="createTask">Create</button>
  </div>
  <div v-show="hasError">Task cannot be empty</div>
</template>
