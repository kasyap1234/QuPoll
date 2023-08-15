import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Poll=({}=>{
    const [poll,setPoll]=useState(null); 
    useEffect(()=>{
        axios.get('http://localhost:5500/polling/${id}').then(response => setPoll(response.data)).catch(error => console.error(error)); 

    },[id]); 
   if(!poll){
    return (
        <div> 
            Loading poll.... 
            </div> 
    )
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
