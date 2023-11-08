import './task.card.scss';
import { Task } from '../../../models/task';
import { useContext } from 'react';
import { AppContext } from '../../../context/app.context';
import { Link } from 'react-router-dom';

type Props = {
  task: Task;
};

export function TaskCard({ task }: Props) {
  const {
    tasksTools: { updateTask, deleteTask },
  } = useContext(AppContext);

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
      <p>
        <Link to={'/details/' + task.id}>Detalles</Link>
      </p>
    </li>
  );
}
