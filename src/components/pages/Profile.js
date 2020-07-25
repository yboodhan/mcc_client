import React from 'react';

import NavBar from '../other/NavBar';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'

import UserInfo from './UserInfo';
import Astronauts from './Astronauts';
import Location from './Location';

const Profile = props => {

    return (
        <div className="Profile">
            <div className="container">
                <NavBar handleLogout={props.handleLogout} />

                

            </div>
        </div>
    )
}

export default Profile;