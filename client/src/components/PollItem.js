import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/PollItem.css'; // Import your custom CSS styles

const PollItem = ({ poll }) => {
  const navigate = useNavigate();

  const handlePollClick = () => {
    navigate(`/polling/${poll.id}`);
  };

  return (
    <div className="poll-item" onClick={handlePollClick}>
      <h3 className="poll-question">{poll.question}</h3>
      <p className="poll-description">Click to view details</p>
    </div>
  );
};

export default PollItem;
