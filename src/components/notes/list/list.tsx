import { useContext, useEffect } from 'react';
import { Card } from '../card/card';
import { Add } from '../add/add';
import './list.scss';

import { AppContext } from '../../../context/app.context';

export function List() {
  const {
    notesTools: { notes, loadNotes },
  } = useContext(AppContext);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <div>
      <details>
        <summary>Añadir</summary>
        <Add></Add>
      </details>
      <ul className="todo-list">
        {notes.map((item) => (
          <Card key={item.id} note={item}></Card>
        ))}
      </ul>
    </div>
  );
}
