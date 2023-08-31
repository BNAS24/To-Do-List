import './styles/heading.css';


const Heading = () => {

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
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="14" viewBox="0 0 64 14" fill="none" className="settings">
        <path d="M63.75 7C63.75 10.7279 60.7279 13.75 57 13.75C53.2721 13.75 50.25 10.7279 50.25 7C50.25 3.27208 53.2721 0.25 57 0.25C60.7279 0.25 63.75 3.27208 63.75 7ZM38.75 7C38.75 10.7279 35.7279 13.75 32 13.75C28.2721 13.75 25.25 10.7279 25.25 7C25.25 3.27208 28.2721 0.25 32 0.25C35.7279 0.25 38.75 3.27208 38.75 7ZM13.75 7C13.75 10.7279 10.7279 13.75 7 13.75C3.27208 13.75 0.25 10.7279 0.25 7C0.25 3.27208 3.27208 0.25 7 0.25C10.7279 0.25 13.75 3.27208 13.75 7Z" stroke="white" strokeWidth="0.5" />
      </svg>
    </div>
  </div>
  )
};

export default Heading;
