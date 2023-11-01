import { useEffect } from 'react';
import { TaskCard } from '../task.card/task.card';
import { Add } from '../add/add';
import './list.scss';
import { useTasks } from '../../../hooks/use.tasks';

export function List() {
  const { tasks, loadTasks, addTask, updateTask, deleteTask } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div>
      <details>
        <summary>Añadir</summary>
        <Add addTask={addTask}></Add>
      </details>
      <ul className="todo-list">
        {tasks.map((item) => (
          <TaskCard
            key={item.id}
            task={item}
            updateTask={updateTask}
            deleteTask={deleteTask}
          ></TaskCard>
        ))}
      </ul>
    </div>
  );
}
