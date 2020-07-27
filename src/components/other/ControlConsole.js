import React from 'react';
import { NavLink } from 'react-router-dom';

// Renders navigation buttons for logged in users
const ControlConsole = props => {
    let navigationLinks = [
        {
            text: "Profile",
            path: "/",
            icon: <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
            </svg>
        },
        {
            text: "Astronauts",
            path: "/astronauts",
            icon: <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg>
        },
        {
            text: "ISS Location",
            path: "/location",
            icon: <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M7.5 4h1v9a.5.5 0 0 1-1 0V4z" />
                <path fillRule="evenodd" d="M6.489 12.095a.5.5 0 0 1-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.382.655.246 1.593.408 2.653.408s1.998-.162 2.653-.408c.329-.123.56-.258.701-.382.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 1 1 .212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.336-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 0 1 .595.383z" />
            </svg>
        },
        {
            text: "Logout",
            path: "/",
            icon: <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z" />
            </svg>
        }
    ];

    return (
        <div className="screen-controls text-danger d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-around align-items-center flex-wrap">
                        {
                            navigationLinks.map((link, index) => {
                                if (link.text === "Logout") {
                                    return (
                                        <button className="screen-button text-danger" key={`nav-${index}`} onClick={props.handleLogout}>
                                            <div>
                                                {link.icon}
                                            </div>
                                            <div>
                                                {link.text}
                                            </div>
                                        </button>
                                    )
                                } else {
                                    return (
                                        <NavLink activeClassName="active" exact to={link.path} key={`nav-${index}`}>
                                            <button className="screen-button">
                                                <div>
                                                    {link.icon}
                                                </div>
                                                <div>
                                                    {link.text}
                                                </div>
                                            </button>
                                        </NavLink>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ControlConsole;