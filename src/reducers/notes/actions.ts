import { Note } from '../../models/note';

export type ActionNotesTypes = 'load' | 'create' | 'update' | 'delete';

type ActionNotesAll = {
  type: 'load';
  payload: Note[];
};

type ActionNotesNote = {
  type: 'create' | 'update';
  payload: Note;
};

type ActionNotesId = {
  type: 'delete';
  payload: Note['id'];
};

export type ActionNotes = ActionNotesAll | ActionNotesNote | ActionNotesId;

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
