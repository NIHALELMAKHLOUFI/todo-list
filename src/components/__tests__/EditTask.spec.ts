import { mount } from '@vue/test-utils';
import EditTask from '../../components/EditTask.vue';
import { describe, expect, it } from 'vitest';

describe('EditTask.vue', () => {
  const task = { id: 1, title: 'Initial Task', completed: false, editing: true };

  it('renders the task title in the input field', () => {
    const wrapper = mount(EditTask, {
      props: { task }
    });

    const input = wrapper.find('input.task-edit-input');
    expect((input.element as HTMLInputElement).value).toBe(task.title);
  });

  it('emits "taskEdited" with updated task when Enter is pressed', async () => {
    const wrapper = mount(EditTask, {
      props: { task }
    });

    const input = wrapper.find('input.task-edit-input');
    
    // Simulate editing the task
    await input.setValue('Updated Task');
    
    // Simulate pressing Enter
    await input.trigger('keyup.enter');

    // Assert that the taskEdited event has been emitted with the correct data
    expect(wrapper.emitted()).toHaveProperty('taskEdited');
    const emittedTask = wrapper.emitted('taskEdited')![0][0];
    expect(emittedTask.title).toBe('Updated Task');
  });

  it('emits "taskEdited" when input loses focus', async () => {
    const wrapper = mount(EditTask, {
      props: { task }
    });

    const input = wrapper.find('input.task-edit-input');
    
    // Simulate editing the task
    await input.setValue('Task after blur');
    
    // Simulate losing focus
    await input.trigger('blur');

    // Assert that the taskEdited event has been emitted with the correct data
    expect(wrapper.emitted()).toHaveProperty('taskEdited');
    const emittedTask = wrapper.emitted('taskEdited')![0][0];
    expect(emittedTask.title).toBe('Task after blur');
  });
});
