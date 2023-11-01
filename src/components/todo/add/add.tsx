import { SyntheticEvent } from 'react';
import { Task } from '../../../models/task';

type Props = {
  addTask: (_task: Partial<Task>) => void;
};

export function Add({ addTask }: Props) {
  const handleSubmit = (event: SyntheticEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();

    const newTask: Partial<Task> = {
      isCompleted: false,
      name: (form.elements.namedItem('title') as HTMLInputElement).value,
      owner: (form.elements.namedItem('owner') as HTMLInputElement).value,
    };
    addTask(newTask);
    form.reset();
  };

  return (
    <form aria-label="add-task" onSubmit={handleSubmit}>
      <legend>Añadir tarea</legend>
      <input
        type="text"
        name="title"
        placeholder="Describe la tarea"
        required
      />
      <input
        type="text"
        name="owner"
        placeholder="Responsable de la tarea"
        required
      />
      <button type="submit">Añadir</button>
    </form>
  );
}
