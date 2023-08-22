

import React from 'react';
import './styles/LandingPage.css'; 

import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

   

    const navigate=useNavigate();
    const Navigated=()=>{
      navigate("/polllist"); 

    }
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to QuPoll</h1>
      <p className="landing-description">
        Create, Share, and Visualize Polls in a Fun and Interactive Way!
      </p>

      <div className="features-container">
        <div className="feature">
          <i className="fas fa-poll-h"></i>
          <h3>Create Polls</h3>
          <p>Create engaging polls with multiple options and customize them to your liking.</p>
        </div>
        <div className="feature">
          <i className="fas fa-chart-bar"></i>
          <h3>Visualize Results</h3>
          <p>See real-time results and visualizations as users vote on your polls.</p>
        </div>
      </div>

      <button  onClick={Navigated} className="get-started-button">Get Started</button>
    </div>
  );
};

export default LandingPage;
