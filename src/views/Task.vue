<script setup>
import { CheckBadgeIcon, PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

defineEmits(["toggle-complete", "edit-task", "update-task", "delete-task"]);
</script>

<template>
  <li>
    <input
      type="checkbox"
      :checked="task.isCompleted"
      @input="$emit('toggle-complete', index)"
    />
    <div class="flex">
      <input
        v-if="task.isEditing"
        type="text"
        :value="task.task"
        class="border"
        @input="$emit('update-task', index, $event.target.value)"
      />
      <div v-else="task.task" :class="task.isCompleted && 'line-through'">
        {{ task.task }}
      </div>
      <CheckBadgeIcon @click="task.isEditing = false" on class="size-6" />
      <TrashIcon @click="$emit('delete-task', task.id)" class="size-6" />
      <PencilIcon @click="$emit('edit-task', index)" class="size-6" />
    </div>
  </li>
</template>
