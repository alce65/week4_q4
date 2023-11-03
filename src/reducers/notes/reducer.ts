// Reducer
// Función pura
// Recibe el estado y una acción
// Retorna un nuevo estado

import { Note } from '../../models/note';
import { ActionNotes } from './actions';

export function notesReducer(
  state: Note[],
  { type, payload }: ActionNotes
): Note[] {
  switch (type) {
    case 'load':
      return payload as Note[];

    case 'create':
      return [...state, payload as Note];

    case 'update':
      // eslint-disable-next-line no-case-declarations
      const updatedNote = payload as Note;
      return state.map((item) =>
        item.id === updatedNote.id ? updatedNote : item
      );

    case 'delete':
      // eslint-disable-next-line no-case-declarations
      const id = payload as Note['id'];
      return state.filter((item) => item.id !== id);

    default:
      return [...state];
  }
}
