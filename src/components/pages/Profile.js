import React from 'react';

// Components
import AstronautImage from '../../static/astronaut.png';
import Loader from '../other/Loader';

// Renders page containing user information based on user prop
const Profile = props => {

    return (
        <div className="pt-5 screen-content">
            <div className="container">

                <div className="row pb-5 text-center">
                    <div className="col">
                        <h1><span role="img" aria-label="planet">🪐</span> Welcome to the Pryon Mission Control Center! <span role="img" aria-label="earth">🌍</span></h1>
                    </div>
                </div>

                <div className="row" style={{ fontSize: "25px" }}>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <div>
                            YOUR STATS:
                        </div>
                        {props.user ?
                            <ul>
                                <li>ID: {props.user.id}</li>
                                <li>First Name: {props.user.firstName}</li>
                                <li>Last Name: {props.user.lastName}</li>
                                <li>Email: {props.user.email}</li>
                            </ul>
                            :
                            <Loader />
                        }
                    </div>

                    <div className="col d-flex justify-content-center">
                        <img role="img" alt="astronaut" className="img-fluid" style={{ maxHeight: "40vh" }} src={AstronautImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;