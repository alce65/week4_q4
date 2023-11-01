import './task.card.scss';
import { Task } from '../../../models/task';

type Props = {
  task: Task;
  deleteTask: (_id: Task['id']) => void;
  updateTask: (_id: Task['id'], _task: Task) => void;
};

export function TaskCard({ task, deleteTask, updateTask }: Props) {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleCheck = () => {
    task.isCompleted = !task.isCompleted;
    updateTask(task.id, task);
  };

  return (
    <li className="task-card">
      <p>
        <span>ID:</span> {task.id}{' '}
      </p>
      <p>
        <span>Name:</span> {task.name}{' '}
      </p>
      <p>
        <span>Owner:</span> {task.owner}{' '}
      </p>
      <p>
        <input
          id="completed"
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleCheck}
        />
        <label htmlFor="completed">Completada</label>
      </p>
      <p role="button" onClick={handleDelete}>
        🗑️
      </p>
    </li>
  );
}
