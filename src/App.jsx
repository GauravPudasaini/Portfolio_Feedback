import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import PortfolioFeedback from './components/PortfolioFeedback';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/Home" />} /> */}
        <Route path="/"  element={<Navigate to = '/Home' replace/>}/>
        <Route path="/Home" element={<Home />}   />
        <Route path="/portfolio-feedback" element={<PortfolioFeedback />} />
      </Routes>
    </Router>
  );
};

export default App;
