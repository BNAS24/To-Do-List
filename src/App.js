import React from 'react';
import './App.css';
import Heading from './Components/heading.js';
import TaskBarGroup from './Components/taskbarGroup';
import { TaskModal } from './Components/taskmodal';


function App() {
  return (
    <div className='appBody'>
      <Heading />
      <TaskBarGroup />
    </div>
  );
}

export default App;
