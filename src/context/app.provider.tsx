import { useState } from 'react';
import { AppContext, ContextStructure } from './app.context';
import { useTasks } from '../hooks/use.tasks';
import { usePhone } from '../phone/hooks/use.phone';
import { useNotes } from '../hooks/use.notes';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const [count, setCount] = useState(0);

  const tasksState = useTasks();
  const phoneTools = usePhone();
  const notesTools = useNotes();

  const context: ContextStructure = {
    foo: 'El contexto de Pepe',
    count,
    setCount,
    tasksTools: tasksState,
    phoneTools,
    notesTools,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
