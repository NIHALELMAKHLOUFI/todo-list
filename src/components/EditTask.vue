<template>
  <div class="edit-task">
    <input
      v-model="editableTask.title"
      @keyup.enter="confirmEdit"
      @blur="confirmEdit"
      class="task-edit-input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

export default defineComponent({
  name: 'EditTask',
  props: {
    task: {
      type: Object as PropType<{ id: number; title: string; completed: boolean; editing: boolean }>,
      required: true,
    },
  },
  emits: ['taskEdited'],
  setup(props, { emit }) {
    const editableTask = ref({ ...props.task });

    watch(
      () => props.task,
      (newTask) => {
        editableTask.value = { ...newTask };
      }
    );

    const confirmEdit = () => {
      emit('taskEdited', editableTask.value);
    };

    return { editableTask, confirmEdit };
  },
});
</script>

<style scoped>
.task-edit-input {
  flex: 1;
  font-size: 16px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
