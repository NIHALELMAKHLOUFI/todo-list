<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/" class="link">Home</router-link></li>
        <li><router-link to="/todos" class="link">Todo List</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 1rem 0; 
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center; 
}

nav li {
  margin: 0 15px; 
}

.link {
  color: #42b983; 
  text-decoration: none; 
  font-weight: bold; 
  font-size: 1.2rem; 
  transition: color 0.3s; 
}

.link:hover {
  text-decoration: underline; 
  color: #333; 
}
</style>
