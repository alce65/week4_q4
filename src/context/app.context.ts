import { createContext } from 'react';
import { useTasks } from '../hooks/use.tasks';
import { usePhone } from '../phone/hooks/use.phone';

export type ContextStructure = {
  foo: string;
  count: number;
  setCount: (count: number) => void;
  tasksTools: ReturnType<typeof useTasks>;
  phoneTools: ReturnType<typeof usePhone>;
};

const initialContext = {} as ContextStructure;

export const AppContext = createContext<ContextStructure>(initialContext);
