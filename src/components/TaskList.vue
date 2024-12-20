<template>
    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @taskUpdated="updateTask"
        @taskRemoved="removeTask"
      />
    </ul>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import TaskItem from './TaskItem.vue';
  
  export default defineComponent({
    name: 'TaskList',
    components: { TaskItem },
    props: {
      tasks: {
        type: Array as PropType<Array<{ id: number; title: string; completed: boolean; editing: boolean }>>,
        required: true
      }
    },
    emits: ['taskUpdated', 'taskRemoved'],
    methods: {
      updateTask(task: any) {
        this.$emit('taskUpdated', task);
      },
      removeTask(id: number) {
        this.$emit('taskRemoved', id);
      }
    }
  });
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  </style>
  