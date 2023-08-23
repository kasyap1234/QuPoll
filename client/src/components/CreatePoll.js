import React, { useState } from 'react';
import axios from 'axios';
import './styles/CreatePoll.css';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
const CreatePoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const navigate=useNavigate();


  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
  };

  const handleSubmit = async () => {
    const id = uuidv4(); // Generate a unique ID
    const poll = {
      id,
      question,
      options,
      optionVotes: {},
    };

    try {
      await axios.post('http://localhost:5500/polling', poll);
      navigate("/polllist");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-poll-container">
      <h2>Create a New Poll</h2>
      <div className="form-container">
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div className="form-container">
        <label>Options:</label>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            {options.length > 2 && (
              <button  className="remove-option-btn" onClick={() => handleRemoveOption(index)}>Remove</button>
            )}
          </div>
        ))}
        <button onClick={handleAddOption}>Add Option</button>
      </div>
      <button onClick={handleSubmit}>Create Poll</button>
    </div>
  );
};

export default CreatePoll;
