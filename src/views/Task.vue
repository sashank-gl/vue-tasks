<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li>
    <input type="checkbox" :checked="task.isCompleted" />
    <div class="flex">
        <div>{{ task.task }}</div>
        <input type="text" :value="task.task" class="border"/>
    </div>
  </li>
</template>
