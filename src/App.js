import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom'

import Home from './components/pages/Home';
import Profile from './components/pages/Profile';

import './App.css';

function App() {
  let [user, setUser] = useState(true);

  useEffect(() => {
    // TODO: implement check for fb and login
  }, [])


  return (
    <Router>
      <div className="App">
       {user ? <Profile /> : <Home />}
      </div>
    </Router>
  );
}

export default App;
