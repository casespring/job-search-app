import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="section">
        <h1>Welcome to Job Quest</h1>
      </div>
      <div className="section">
        <h2>A place to track and manage your job applications efficiently.</h2>
      </div>
      <div className="section">
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Organize and categorize your job applications</li>
          <li>Update and track the status of each application</li>
          <li>Save useful articles for future reference</li>
        </ul>
      </div>
      <div className="section">
        <p>Start your journey toward landing your dream job today!</p>
      </div>
      <div className="button-section">
        <Link to="/add-job" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
}

export default Home;