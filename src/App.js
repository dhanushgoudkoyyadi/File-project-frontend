import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './features/signup';
import Login from './features/Login';
import FileUpload from './features/board';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board" element={<FileUpload/>} />
        
        
      </Routes>
    </Router>
    
  );
}

export default App;