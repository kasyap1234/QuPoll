import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Poll = () => {
  const [poll, setPoll] = useState(null);
  const {pollId} = useParams(); 
  console.log(pollId); 

  useEffect(() => {
    axios.get(`http://localhost:5500/polling/${pollId}`)
      .then(response => setPoll(response.data))
      .catch(error => console.error(error));
  },[pollId]);

  if (!poll) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map((option, index) => (
          <li key={index}>
            {option} - Votes: {poll.optionVotes[option]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poll;
