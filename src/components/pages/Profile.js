import React from 'react';

import NavBar from '../other/NavBar';
import { Route } from 'react-router-dom';

import UserInfo from './UserInfo';
import Astronauts from './Astronauts';
import Location from './Location';

const Profile = props => {

    return (
        <div className="Profile">
            <div className="container">
                <NavBar handleLogout={props.handleLogout} />

                <Route exact path="/profile" render={
                    () => <UserInfo />
                } />

                <Route path="/astronauts" render={
                    () => <Astronauts />
                } />

                <Route path="/location" render={
                    () => <Location />
                } />
            </div>
        </div>
    )
}

export default Profile;