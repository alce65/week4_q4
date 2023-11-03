import './card.scss';
import { Note } from '../../../models/note';
import { useContext } from 'react';
import { AppContext } from '../../../context/app.context';

type Props = {
  note: Note;
};

export function Card({ note }: Props) {
  const {
    notesTools: { updateNote, deleteNote },
  } = useContext(AppContext);

  const handleDelete = () => {
    deleteNote(note.id);
  };

  const handleCheck = () => {
    note.isImportant = !note.isImportant;
    updateNote(note.id, note);
  };

  return (
    <li className="note-card">
      <p>
        <span>ID:</span> {note.id}{' '}
      </p>
      <p>
        <span>Name:</span> {note.title}{' '}
      </p>
      <p>
        <span>Owner:</span> {note.author}{' '}
      </p>
      <p>
        <input
          id="completed"
          type="checkbox"
          checked={note.isImportant}
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
