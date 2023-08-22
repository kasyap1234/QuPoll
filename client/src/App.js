import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PollList from './components/PollList';
import Poll from './components/Poll';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/polllist"  element={<PollList />} />
        <Route path="/polling/:pollId" element={<Poll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
