import React from 'react';

import AstronautImage from '../../static/astronaut.png';

const Profile = props => {

    return (
        <div className="pt-5 screen-content">
            <div className="container">

                <div className="row pb-5 text-center">
                    <div className="col">
                        <h1>Welcome to the Pryon Mission Control Center!</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div style={{fontSize: "20px"}}>
                            YOUR STATS:
                        </div>

                        <ul>
                            <li>ID: {props.user.id}</li>
                            <li>First Name: {props.user.firstName}</li>
                            <li>Last Name: {props.user.lastName}</li>
                            <li>Email: {props.user.email}</li>
                        </ul>
                    </div>

                    <div className="col">
                        <img alt="astronaut" className="img-fluid" src={AstronautImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;