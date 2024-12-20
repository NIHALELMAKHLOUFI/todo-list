<template>
  <div class="todo-list">
    <h1 >My To-Do List</h1>
    <AddTask @taskAdded="addTask" />
    <TaskList
      :tasks="tasks"
      @taskUpdated="updateTask"
      @taskRemoved="removeTask"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import AddTask from './AddTask.vue';
import TaskList from './TaskList.vue';
import Api from '../services/Api';

export default defineComponent({
  name: 'TodoList',
  components: { AddTask, TaskList },
  setup() {
    const tasks = ref<Array<{ id: number; title: string; completed: boolean; editing: boolean }>>([]);
    
    const fetchTasks = () => {
      Api.getTasks()
        .then((response) => {
          tasks.value = response.data.data.map((task: any) => ({
            ...task,
            editing: false,
          }));
        })
        .catch((error) => {
          console.error('Error fetching tasks:', error);
        });
    };

    const addTask = async (title: string) => {
      try {
        const response = await Api.addTask({ title });
        tasks.value.push({ ...response.data, completed: false, editing: false });
      } catch (error) {
        console.error('Error adding task:', error);
      }
    };

    const updateTask = async (task: any) => {
      try {
        await Api.updateTask(task.id, { title: task.title });
      } catch (error) {
        console.error('Error updating task:', error);
      }
    };

    const removeTask = async (id: number) => {
      try {
        await Api.deleteTask(id);
        tasks.value = tasks.value.filter(task => task.id !== id);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    };

    onMounted(fetchTasks);

    return {
      tasks,
      addTask,
      updateTask,
      removeTask,
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
</style>
