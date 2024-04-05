import React from 'react';
import './App.css';
import Heading from './Components/heading.js';
import { TaskContextProvider } from './TaskModalContext';

function App() {

  return (
    <TaskContextProvider>
        <Heading />
    </TaskContextProvider>
  );
}

export default App;
