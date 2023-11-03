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
      return payload;

    case 'create':
      return [...state, payload];

    case 'update':
      return state.map((item) => (item.id === payload.id ? payload : item));

    case 'delete':
      return state.filter((item) => item.id !== payload);

    default:
      return [...state];
  }
}
