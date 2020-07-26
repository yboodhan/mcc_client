import React from 'react';

import AstronautImage from '../../static/astronaut.png';

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
                        { props.user ?
                            <ul>
                                <li>ID: {props.user.id}</li>
                                <li>First Name: {props.user.firstName}</li>
                                <li>Last Name: {props.user.lastName}</li>
                                <li>Email: {props.user.email}</li>
                            </ul>
                            :

                            <div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="text-light">Loading...</div>
                            </div>
                        }
                    </div>

                    <div className="col d-flex justify-content-center">
                        <img alt="astronaut" className="img-fluid" style={{ maxHeight: "40vh" }} src={AstronautImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;