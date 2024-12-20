<template>
  <button @click="deleteTask" class="task-button delete-button">
    <i class="fa-solid fa-trash"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeleteTask',
  emits: ['taskDeleted'],
  props: {
    taskId: {
      type: Number,
      required: true
    }
  },
  setup(props, { emit }) {
    const deleteTask = () => {
      emit('taskDeleted', props.taskId);
    };

    return { deleteTask };
  }
});
</script>

<style scoped>
.task-button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 100%;
  cursor: pointer;
  font-size: 14px;
}

.delete-button {
  background-color: #dc3545;
}

.task-button:hover {
  opacity: 0.8;
}
</style>
