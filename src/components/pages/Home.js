import React from 'react';

// Components
import Login from './Login';
import Profile from './Profile';

// Renders login or profile page for home path based on isAuthenticated prop
const Home = props => {

    return (
        <div>
            {!props.isAuthenticated ?
                <Login handleAuth={props.handleAuth} />
                :
                <Profile user={props.user} isAuthenticated={props.isAuthenticated} />
            }
        </div>
    )
}

export default Home;