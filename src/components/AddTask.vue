<template>
    <div class="input-container">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Add a new task"
        class="task-input"
      />
      <button @click="addTask" class="task-button add-button">
        <i class="fas fa-plus"></i>
      </button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'AddTask',
    emits: ['taskAdded'],
    setup(props, { emit }) {
      const newTask = ref('');
  
      const addTask = () => {
        if (newTask.value.trim() !== '') {
          emit('taskAdded', newTask.value);
          newTask.value = '';
        }
      };
  
      return { newTask, addTask };
    }
  });
  </script>
  
  <style scoped>
  .input-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .task-input {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .task-button {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 100%;
    cursor: pointer;
    font-size: 14px;
  }
  
  .add-button {
    background-color: #28a745;
  }
  </style>
  