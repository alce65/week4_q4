import { screen, render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import { useTasks } from './use.tasks';
import { ApiRepo } from '../services/api.repo';
import { Task } from '../models/task';
import { useEffect } from 'react';

describe('Given the useTask hook', () => {
  const addedTask = { id: 123 } as unknown as Task;
  ApiRepo.prototype.getTasks = jest
    .fn()
    .mockResolvedValue([{ id: 34 } as unknown as Task]);
  ApiRepo.prototype.createTask = jest.fn().mockResolvedValue(addedTask);
  // ApiRepo.prototype.updateTask = jest.fn();
  // ApiRepo.prototype.deleteTask = jest.fn();

  describe('When we run the hook inside a component', () => {
    beforeEach(async () => {
      const TestComponent = () => {
        const { tasks, loadTasks, addTask } = useTasks();

        useEffect(() => {
          loadTasks();
        }, [loadTasks]);

        return (
          <>
            <h2>Test Component</h2>
            <button onClick={() => addTask(addedTask)}>Add</button>
            <button>Update</button>
            <button>Delete</button>
            {tasks.map((item) => (
              <p key={item.id}>{item.id}</p>
            ))}
          </>
        );
      };

      await act(async () => {
        render(<TestComponent></TestComponent>);
      });
    });

    test('Then it should be in the document', async () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
      let item = screen.getByText('34');
      expect(item).toBeInTheDocument();
      const buttons = screen.getAllByRole('button');

      await userEvent.click(buttons[0]);
      item = await screen.findByText(addedTask.id);
      expect(item).toBeInTheDocument();
    });
  });
});
