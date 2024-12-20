import { render, fireEvent } from '@testing-library/vue';
import AddTask from '../../components/AddTask.vue';
import { describe, it, expect } from 'vitest';

describe('AddTask.vue', () => {
  it('should emit "taskAdded" when a valid task is added', async () => {
    const { getByPlaceholderText, getByRole, emitted } = render(AddTask);
    
    const input = getByPlaceholderText('Add a new task');
    const button = getByRole('button');

    await fireEvent.update(input, 'New Task ');
    await fireEvent.click(button);

    expect(emitted().taskAdded).toBeTruthy();
    expect(emitted().taskAdded[0]).toEqual(['New Task']);
  });
});
