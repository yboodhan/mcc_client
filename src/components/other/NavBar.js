import React from 'react';

const NavBar = props => {
    let navigationLinks = [
        {
            text: "Profile",
            path: "/profile"
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

    function handleLogout() {
        window.open(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, "_self");
    }

    return (
        <div className="pt-4 pb-5">
            <ul className="nav d-flex justify-content-between">
                {
                    navigationLinks.map((link, index) => {
                        if (link.text === "Logout") {
                            return(
                                <li className="nav-item pr-5" key={`nav-${index}`}>
                                    <button className="nav-link active" onClick={handleLogout}>{link.text}</button>
                                </li>
                            )
                        } else {
                            return (
                                <li className="nav-item pr-5" key={`nav-${index}`}>
                                    <a className="nav-link active" href={link.path}>{link.text}</a>
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