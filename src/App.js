import React from 'react';
import './App.css';
import Heading from './Components/heading.js';
import TaskBarGroup from './Components/taskbarGroup';
import NewTask from './Components/newtask';

function App() {
  return (
    <div className='appBody'>
      <Heading />
      <TaskBarGroup />
      <NewTask />
    </div>
  );
}

export default App;
