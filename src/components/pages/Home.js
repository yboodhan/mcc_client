import React from 'react';

// Components
import Login from './Login';
import Profile from './Profile';

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