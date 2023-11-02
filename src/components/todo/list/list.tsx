import { useContext, useEffect } from 'react';
import { TaskCard } from '../task.card/task.card';
import { Add } from '../add/add';
import './list.scss';

import { AppContext } from '../../../context/app.context';

export function List() {
  const {
    tasksTools: { tasks, loadTasks },
  } = useContext(AppContext);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div>
      <details>
        <summary>Añadir</summary>
        <Add></Add>
      </details>
      <ul className="todo-list">
        {tasks.map((item) => (
          <TaskCard key={item.id} task={item}></TaskCard>
        ))}
      </ul>
    </div>
  );
}
