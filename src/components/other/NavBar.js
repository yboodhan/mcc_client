import React from 'react'

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
        }
    ];

    return (
        <div className="pt-4 pb-5">
            <ul className="nav">
                {
                    navigationLinks.map((link, index) => {
                        return (
                            <li className="nav-item pr-5" key={`nav-${index}`}>
                                <a className="nav-link active" href={link.path}>{link.text}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NavBar;