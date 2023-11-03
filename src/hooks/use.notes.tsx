import { useCallback, useMemo, useReducer } from 'react';
import { ApiRepoNotes } from '../services/api.repo.notes';
import { Note } from '../models/note';
import { notesReducer } from '../reducers/notes/reducer';
import * as ac from '../reducers/notes/actions';

export function useNotes() {
  // const [notes, setNotes] = useState<Note[]>([]);

  const [notes, dispatch] = useReducer(notesReducer, []);

  const repo = useMemo(() => new ApiRepoNotes(), []);

  const loadNotes = useCallback(async () => {
    try {
      // Asíncrona
      const loadedNotes = await repo.getNotes();
      // Síncrono
      // setNotes(loadedNotes);
      dispatch(ac.loadActionCreator(loadedNotes));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const addNote = async (note: Partial<Note>) => {
    try {
      // Asíncrona -> API
      const newNote = await repo.createNote(note);
      // Síncrono -> Vista
      // setNotes([...notes, newNote]);
      dispatch(ac.createActionCreator(newNote));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateNote = async (id: Note['id'], note: Partial<Note>) => {
    try {
      // Asíncrona -> API
      const updatedNote = await repo.updateNote(id, note);
      // Síncrono -> Vista

      // setNotes(
      //   notes.map((item) => (item.id === updatedNote.id ? updatedNote : item))
      // );
      dispatch(ac.updateActionCreator(updatedNote));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteNote = async (id: Note['id']) => {
    try {
      // Asíncrona -> API
      await repo.deleteNote(id);
      // Síncrono -> Vista
      // setNotes(notes.filter((item) => item.id !== id));
      dispatch(ac.deleteActionCreator(id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return {
    notes,
    loadNotes,
    addNote,
    updateNote,
    deleteNote,
  };
}
