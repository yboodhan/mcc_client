import React from 'react';
import NavBar from '../other/NavBar';
import UserInfo from './UserInfo';

const Profile = props => {
    return (
        <div className="Profile">
            <div className="container">
                <NavBar />
                <UserInfo />
            </div>
        </div>
    )
}

export default Profile;