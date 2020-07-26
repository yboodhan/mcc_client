import React from 'react';

import Login from './Login';
import Profile from './Profile';

const Home = props => {

    return (
        <div>
            {!props.isAuthenticated ?
                <Login handleAuth={props.handleAuth} />
                :
                <Profile user={props.user}/>
            }
        </div>
    )
}

export default Home;