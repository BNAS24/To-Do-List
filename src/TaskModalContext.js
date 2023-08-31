// TaskModalContext.js
import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskContextProvider = ({ children }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  return (
    <TaskContext.Provider value={{ taskTitle, setTaskTitle, dueDate, setDueDate }}>
      {children}
    </TaskContext.Provider>
  );
};
