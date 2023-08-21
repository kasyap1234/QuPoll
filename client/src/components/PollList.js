import React, { useState, useEffect } from 'react';
import PollItem from './PollItem';
import axios from 'axios';
import './styles/PollList.css'; // Import the CSS file with your styling

const PollList = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5500/polling')
      .then(response => setPolls(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="poll-list">
      <h2 className="poll-list-header">Polls</h2>
      <div className="polls-container">
        {polls.map(poll => (
          <PollItem key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  );
};

export default PollList;

