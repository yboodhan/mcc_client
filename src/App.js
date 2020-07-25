import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import AppRouter from './components/pages/AppRouter';

import './App.css';

function App() {
  let [user, setUser] = useState(null);
  let [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleAuth(user) {
    console.log('handle auth has been called')
    setUser(user);
    setIsAuthenticated(true);
  }

  function handleLogout() {
    window.open(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, "_self");
    console.log('setting to false now')
    setIsAuthenticated(false);
  }

  return (
    <div className="App">
      <h1>Welcome {user  ? user.email: "noone"}</h1>
      <AppRouter user={user} isAuthenticated={isAuthenticated} handleAuth={handleAuth} handleLogout={handleLogout} />
    </div>
  );
}

export default App;
