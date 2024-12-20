import { render, fireEvent } from '@testing-library/vue';
import DeleteTask from '../../components/DeleteTask.vue';  
import { describe, it, expect } from 'vitest';

describe('DeleteTask.vue', () => {
  it('emits taskDeleted event with taskId when button is clicked', async () => {
    // Arrange: Render the component and pass the required prop (taskId)
    const taskId = 1;
    const { getByRole, emitted } = render(DeleteTask, {
      props: { taskId },
    });

    // Act: Find the button and simulate a click event
    const deleteButton = getByRole('button');
    await fireEvent.click(deleteButton);

    // Assert: Check if the 'taskDeleted' event was emitted with the correct taskId
    const events = emitted();
    expect(events.taskDeleted).toBeTruthy();
    expect(events.taskDeleted[0]).toEqual([taskId]);
  });
});
