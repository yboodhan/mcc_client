import React, { useState } from 'react';

// Routes
import AppRouter from './components/pages/AppRouter';

// Styles
import './App.css';

function App() {
  let [user, setUser] = useState(null);
  let [isAuthenticated, setIsAuthenticated] = useState(false);

  // Logs in user and set authentication to true
  function handleAuth(user) {
    setUser(user);
    setIsAuthenticated(true);
  }

  // Logs out user and sets authentication to false
  function handleLogout() {
    window.open(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, "_self");
    setIsAuthenticated(false);
  }

  return (
    <div className="App">
      <AppRouter user={user} isAuthenticated={isAuthenticated} handleAuth={handleAuth} handleLogout={handleLogout} />
    </div>
  );
}

export default App;
