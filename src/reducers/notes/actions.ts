import { Note } from '../../models/note';

export type ActionNotesTypes = 'load' | 'create' | 'update' | 'delete';

export type ActionNotes = {
  type: ActionNotesTypes;
  payload?: Note[] | Note | Note['id'];
};

export const loadActionCreator = (payload: Note[]): ActionNotes => ({
  type: 'load',
  payload,
});

export const createActionCreator = (payload: Note): ActionNotes => ({
  type: 'create',
  payload,
});

export const updateActionCreator = (payload: Note): ActionNotes => ({
  type: 'update',
  payload,
});

export const deleteActionCreator = (payload: Note['id']): ActionNotes => ({
  type: 'delete',
  payload,
});
