import React from 'react';
// import Typing from 'react-typing-animation';
import AstronautImage from '../../static/astronaut.png';

const UserInfo = props => {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center align-items-center text-center container">
                <div className="row">
                    <div className="col">
                        Welcome to the Pryon Mission Control Center!
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        [TODO: INSERT USER INFO HERE]
                        STATS:
                        <ul>
                            <li>Name: </li>
                            <li>Token: </li>
                            <li>Other: </li>
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

export default UserInfo;