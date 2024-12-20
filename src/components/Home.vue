<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
});
</script>

<template >
    <div class="home">
      <h1 class="text-2xl text-gray-800 mb-4">Welcome to My App</h1>
      <p class="text-red-400">
        Navigate to <router-link to="/todos" class="link">Todo List</router-link> to manage your tasks.
      </p>
    </div>
  </template>
  
  <style scoped>
  .home {
    text-align: center;
    background-color: white;
    padding: 2rem; 
    border-radius: 10px; 
    max-width: 600px; 
    margin: 0 auto; 
    box-shadow: 0 4px 8px rgba(10, 10, 10, 0.1); 
  }
  
  h1 {
    color: #333; 
    font-size: 2rem; 
    margin-bottom: 1rem; 
  }
  
  p {
    font-size: 1.1rem; 
    color: #555; 
  }
  
  .link {
    color: #42b983; 
    text-decoration: none; 
    font-weight: bold; 
  }
  
  .link:hover {
    text-decoration: underline; 
  }
  </style>
  