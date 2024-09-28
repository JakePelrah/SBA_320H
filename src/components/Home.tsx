import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login/Login.tsx';
import HomeImage from '../images/home-img.png';


const Home: React.FC = () => {
  return (
    <div className="home-page">
       <p className = "phrase">
       A tutoring platform dedicated to helping Per Scholas students achieve academic success.
      </p>
      <div className="content">
        <img src={HomeImage} alt="Home" />
        <div className='right-side'>
        <Login className="login-form" />
        <Link className="create-session-link" style={{ 'color': 'white' }} to="create-session">Create new Session</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
