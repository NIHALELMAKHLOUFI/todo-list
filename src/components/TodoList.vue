<template>
    <div class="todo-list">
      <h1>My To-Do List</h1>
      <div class="input-container">
        <input
          v-model="newTask"
          @keyup.enter="addTask"
          placeholder="Add a new task"
          class="task-input"
        />
        <button @click="addTask" class="task-button add-button"> <i class="fas fa-plus"></i></button>
      </div>
      <ul>
        <li v-for="(task, index) in tasks" :key="index" class="task-item">
          <input type="checkbox" v-model="task.completed" class="task-checkbox" />
          <span v-if="!task.editing" :class="{ completed: task.completed }" class="task-text">
            {{ task.text }}
          </span>
          <input
            v-if="task.editing"
            v-model="task.text"
            @keyup.enter="stopEditing(task)"
            @blur="stopEditing(task)"
            class="task-edit-input"
          />
          <button @click="editTask(task)" class="task-button edit-button"><i class="fa-regular fa-pen-to-square"></i></button>
          <button @click="removeTask(index)" class="task-button delete-button"><i class="fa-solid fa-trash"></i></button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, watch } from 'vue';
  
  interface Task {
    text: string;
    completed: boolean;
    editing: boolean;
  }
  
  export default defineComponent({
    name: 'TodoList',
    setup() {
      const newTask = ref('');
      const tasks = ref<Task[]>([]);
  
      const loadTasks = () => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
          tasks.value = JSON.parse(storedTasks);
        }
      };
  
      const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks.value));
      };
  
      onMounted(() => {
        loadTasks();
      });
  
      watch(tasks, saveTasks, { deep: true });
  
      const addTask = () => {
        if (newTask.value.trim() !== '') {
          tasks.value.push({ text: newTask.value, completed: false, editing: false });
          newTask.value = '';
        }
      };
  
      const removeTask = (index: number) => {
        tasks.value.splice(index, 1);
      };
  
      const editTask = (task: Task) => {
        task.editing = true;
      };
  
      const stopEditing = (task: Task) => {
        task.editing = false;
      };
  
      return {
        newTask,
        tasks,
        addTask,
        removeTask,
        editTask,
        stopEditing,
      };
    },
  });
  </script>
  
  <style scoped>
  .todo-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
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
  
  .edit-button {
    background-color: #ffc107;
  }
  
  .delete-button {
    background-color: #dc3545;
  }
  
  .task-button:hover {
    opacity: 0.8;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    
  }
  
  .task-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    
  }
  
  .task-checkbox {
    margin-right: 10px;
    
  }
  
  .task-text {
    flex: 1;
    font-size: 16px;
  }
  
  .task-edit-input {
    flex: 1;
    font-size: 16px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .completed {
    text-decoration: line-through;
    color: #999;
  }
  </style>
  