import React from 'react';
import './App.css';
import Heading from './Components/heading.js';
import TaskBarGroup from './Components/taskbarGroup';
import { TaskContextProvider } from './TaskModalContext';


function App() {

  return (
    <TaskContextProvider>
      <div className='appBody'>
        <Heading />
        <TaskBarGroup />
      </div>
    </TaskContextProvider>
  );
}


export default App;
