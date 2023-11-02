import { createContext } from 'react';
import { useTasks } from '../hooks/use.tasks';

export type ContextStructure = {
  foo: string;
  count: number;
  setCount: (count: number) => void;
  tasksTools: ReturnType<typeof useTasks>;
};

const initialContext = {} as ContextStructure;

export const AppContext = createContext<ContextStructure>(initialContext);
