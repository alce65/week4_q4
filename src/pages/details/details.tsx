import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/app.context';

export default function Details() {
  const { id } = useParams();
  const {
    tasksTools: { tasks },
  } = useContext(AppContext);
  const task = tasks.find((item) => String(item.id) === id);

  return (
    <>
      <h2>Detalles de la tarea {id}</h2>
      <p>{task?.name}</p>
      <p>{task?.owner}</p>
    </>
  );
}
