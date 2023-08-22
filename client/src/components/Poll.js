import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles/Poll.css'; // Import your CSS file for styling

const Poll = () => {
  const [poll, setPoll] = useState(null);
  const { pollId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5500/polling/${pollId}`)
      .then(response => setPoll(response.data))
      .catch(error => console.error(error));
  }, [pollId]);

  const handleVote = (option) => {
    // Add your voting logic here
  };

  if (!poll) {
    return <div>Loading...</div>;
  }

  return (
    <div className="poll-container">
      <h2 className="poll-question">{poll.question}</h2>
      <ul className="options-list">
        {poll.options.map((option, index) => (
          <li key={index} className="option-item">
            <div className="option-details">
              <span className="option-text">{option}</span>
              <span className="vote-count">{poll.optionVotes[option]} Votes</span>
            </div>
            <button className="vote-button" onClick={() => handleVote(option)}>
              Vote
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poll;
