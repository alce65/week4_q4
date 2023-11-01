import { useCallback, useMemo, useState } from 'react';
import { ApiRepo } from '../services/api.repo';
import { Task } from '../models/task';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const repo = useMemo(() => new ApiRepo(), []);

  const loadTasks = useCallback(async () => {
    try {
      // Asíncrona
      const loadedTasks = await repo.getTasks();
      // Síncrono
      setTasks(loadedTasks);
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const addTask = async (task: Partial<Task>) => {
    try {
      // Asíncrona -> API
      const newTask = await repo.createTask(task);
      // Síncrono -> Vista
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateTask = async (id: Task['id'], task: Partial<Task>) => {
    try {
      // Asíncrona -> API
      const updatedTask = await repo.updateTask(id, task);
      // Síncrono -> Vista

      setTasks(
        tasks.map((item) => (item.id === updatedTask.id ? updatedTask : item))
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteTask = async (id: Task['id']) => {
    try {
      // Asíncrona -> API
      await repo.deleteTask(id);
      // Síncrono -> Vista
      setTasks(tasks.filter((item) => item.id !== id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return {
    tasks,
    loadTasks,
    addTask,
    updateTask,
    deleteTask,
  };
}
