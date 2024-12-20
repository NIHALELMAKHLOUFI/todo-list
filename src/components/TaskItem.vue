<template>
    <li class="task-item">
      <input
        type="checkbox"
        v-model="task.completed"
        @change="updateTaskCompletion"
        class="task-checkbox"
      />
      <span v-if="!task.editing" :class="{ completed: task.completed }" class="task-text">
        {{ task.title }}
      </span>
      <EditTask v-if="task.editing" :task="task" @taskEdited="updateTask" />
      <button @click="editTask" class="task-button edit-button">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
      <DeleteTask :taskId="task.id" @taskDeleted="removeTask" />
    </li>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import EditTask from './EditTask.vue';
  import DeleteTask from './DeleteTask.vue';
  
  export default defineComponent({
    name: 'TaskItem',
    components: { EditTask, DeleteTask },
    props: {
      task: {
        type: Object as PropType<{ id: number; title: string; completed: boolean; editing: boolean }>,
        required: true
      }
    },
    emits: ['taskUpdated', 'taskRemoved'],
    methods: {
      editTask() {
        this.task.editing = true;
      },
      updateTask(task: any) {
        this.task.editing = false;
        this.$emit('taskUpdated', task);
      },
      removeTask() {
        this.$emit('taskRemoved', this.task.id);
      },
      updateTaskCompletion() {
        this.$emit('taskUpdated', this.task);
      }
    }
  });
  </script>
  
  <style scoped>
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
  
  .completed {
    text-decoration: line-through;
    color: #999;
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
  
  .edit-button {
    background-color: #ffc107;
  }
  
  .delete-button {
    background-color: #dc3545;
  }
  
  .task-button:hover {
    opacity: 0.8;
  }
  </style>
  