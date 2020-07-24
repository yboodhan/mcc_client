import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom'

import Home from './components/pages/Home';
import Profile from './components/pages/Profile';

import './App.css';

function App() {
  let [user, setUser] = useState(true);
  let [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    async function findUser() {
      try {
        let userResults = await getUser();
        let user = userResults.user;
        if (user) {
          setUser(user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log('An error occured while authenticating the user.')
      }
    }

    findUser();
  }, [])

  function getUser() {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login/success`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        return response.json()
      }).then((results) => {
        return results;
      })
  }

  function handleLogout() {
    setIsAuthenticated(false);
  }


  return (
    <Router>
      <div className="App">
        {user && isAuthenticated ?
          <Profile handleLogout={handleLogout} />
          :
          <Home />}
      </div>
    </Router>
  );
}

export default App;
