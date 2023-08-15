import React,{useState,useEffect} from 'react';
import axios from 'axios'; 
const PollList=()=>{
    const [polls,setPolls]=useState([]);
    useEffect(() => {
        axios.get('http://localhost:5500/polling')
          .then(response => setPolls(response.data))
          .catch(error => console.error(error));
      }, []);
      return (
        <div>
      <h2>Polls</h2>
      <ul>
        {polls.map(poll => (
          <li key={poll.id}>
            <a href={`/poll/${poll.id}`}>{poll.question}</a>
          </li>
        ))}
      </ul>
    </div>
      )
}
export default PollList;
