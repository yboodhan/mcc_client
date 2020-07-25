import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

const NavBar = props => {
    let navigationLinks = [
        {
            text: "Profile",
            path: "/"
        },
        {
            text: "Astronauts",
            path: "/astronauts"
        },
        {
            text: "ISS Location",
            path: "/location"
        },
        {
            text: "Logout",
            path: "/"
        }
    ];

    if (props.isAuthenticated == false) {
        return <Redirect to="/" />
    }

    return (
        <div className="p-5">
            <ul className="nav d-flex justify-content-between">
                {
                    navigationLinks.map((link, index) => {
                        if (link.text === "Logout") {
                            return(
                                <li className="nav-item pr-5" key={`nav-${index}`}>
                                    <button className="nav-link active" onClick={props.handleLogout}>{link.text}</button>
                                </li>
                            )
                        } else {
                            return (
                                <li className="nav-item pr-5" key={`nav-${index}`}>
                                    <Link to={link.path}>{link.text}</Link>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default NavBar;