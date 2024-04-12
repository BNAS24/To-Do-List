import { useState, useEffect } from 'react';
import { NewTask } from './newtask';
import './styles/heading.css';
import TaskBarGroup from './taskbarGroup';

// Import audio files
import tapSoundFile from '../assets/tap-sound.mp3';
import bellDingFile from '../assets/bell-ding.mp3';

const Heading = () => {
  const [tasks, setTasks] = useState([]);
  const currentDate = new Date();
  const formattedDate = `Created: ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  const [sounds, setSounds] = useState({
    dingAudio: null,
    clickAudio: null,
  });

  useEffect(() => {
    // Create audio elements
    const clickAudio = new Audio(tapSoundFile);
    const dingAudio = new Audio(bellDingFile);

    // Set volume
    clickAudio.volume = 0.3;
    dingAudio.volume = 0.3;

    // Update state with audio elements
    setSounds({
      clickAudio: clickAudio,
      dingAudio: dingAudio,
    });

  }, []);

  // Function to play bubble sound
  const playSound = () => {
    const clickAudio = sounds?.clickAudio;
    if (clickAudio) {
      clickAudio.currentTime = 0; // Reset audio to the beginning
      const bubble = async () => {
        try {
          await clickAudio.play();
        } catch (err) {
          console.error(err);
          console.log('Sound couldn\'t be played');
        }
      };
      bubble();
    }
  };
  
  const playDing = () => {
    const dingAudio = sounds?.dingAudio;
    if (dingAudio) {
      dingAudio.currentTime = 0; // Reset audio to the beginning
      const ding = async () => {
        try {
          await dingAudio.play();
        } catch (err) {
          console.error(err);
          console.log('Sound couldn\'t be played');
        }
      };
      ding();
    }
  };
  

  const createTask = () => {
    const newTask = {
      id: Date.now(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timestamp: formattedDate
    };
    setTasks([newTask, ...tasks]);
    playDing();
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    playSound();
  };

  return (
    <div className="todolistCard">
      <div className="headingGroup">
        <div className="headingContainer">
          <input
            className="headingText"
            placeholder='Task List'
            maxLength={100}>
          </input>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="14"
          viewBox="0 0 64 14"
          fill="none"
          className="settings"
        >
          <path
            d="M63.75 7C63.75 10.7279 60.7279 13.75 57 13.75C53.2721 13.75 50.25 10.7279 50.25 7C50.25 3.27208 53.2721 0.25 57 0.25C60.7279 0.25 63.75 3.27208 63.75 7ZM38.75 7C38.75 10.7279 35.7279 13.75 32 13.75C28.2721 13.75 25.25 10.7279 25.25 7C25.25 3.27208 28.2721 0.25 32 0.25C35.7279 0.25 38.75 3.27208 38.75 7ZM13.75 7C13.75 10.7279 10.7279 13.75 7 13.75C3.27208 13.75 0.25 10.7279 0.25 7C0.25 3.27208 3.27208 0.25 7 0.25C10.7279 0.25 13.75 3.27208 13.75 7Z" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      <TaskBarGroup
        tasks={tasks}
        deleteTask={deleteTask}
      />
      <NewTask
        createTask={createTask}
      />
    </div>
  );
};

export default Heading;
