import React from 'react';
import Typing from 'react-typing-animation';
import AstronautImage from '../../static/astronaut.png';

const UserInfo = props => {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col">
                    <Typing speed={50}>
                        Hello, [TODO: INSERT NAME HERE].
                        <Typing.Delay ms={500} />
                        Welcome to the Pryon Mission Control Center!
                    </Typing>
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
    )
}

export default UserInfo;