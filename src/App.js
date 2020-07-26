import React, { useState, useEffect } from 'react';

// Routes
import AppRouter from './components/pages/AppRouter';

import Loading from './components/pages/Loading';
// Styles
import './App.css';

function App() {
  let [user, setUser] = useState(null);
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    // On page load, look for a user
    async function findUser() {
      try {
        let user = await getUser();
        if (user) {
          handleAuth(user, true);
        } else {
          handleAuth(null, false);
        }
        setIsLoading(false);
      } catch (error) {
        console.log('Unable to find if a user is already logged in.')
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
        if (results.status === "error") {
          return null;
        } else {
          return results.user;
        }
      }).catch((error) => {
        console.log(error)
      })
  }

  // Logs in user and set authentication to true
  function handleAuth(user, auth) {
    setUser(user);
    setIsAuthenticated(auth);
  }

  // Logs out user and sets authentication to false
  function handleLogout() {
    window.open(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, "_self");
    setIsAuthenticated(false);
  }

  console.log('Auth is now', isAuthenticated)
  return (
    <div className="App">
      { isLoading ? 
      <Loading /> 
      :
      <AppRouter user={user} isAuthenticated={isAuthenticated} handleAuth={handleAuth} handleLogout={handleLogout} />
    }
    </div>
  );
}

export default App;
