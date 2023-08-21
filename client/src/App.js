import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PollList from './components/PollList';
import Poll from './components/Poll';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<PollList />} />
        <Route path="/poll/:pollId" element={<Poll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
