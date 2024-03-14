<script setup>
import { CheckBadgeIcon, PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['mark-complete'])
const markComplete = () => {
  task.isCompleted = true
  emit('mark-complete')
}
</script>

<template>
  <li>
    <input type="checkbox" :checked="markComplete" />
    <div class="flex">
      <input v-if="task.isEditing" type="text" :value="task.task" class="border" />
      <div v-else="task.task">{{ task.task }}</div>
      <CheckBadgeIcon @click="task.isEditing = false" on class="size-6" />
      <TrashIcon class="size-6" />
      <PencilIcon @click="task.isEditing = true" class="size-6" />
    </div>
  </li>
</template>
