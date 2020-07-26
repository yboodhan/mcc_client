import React, { useEffect, useState } from 'react'
import NavBar from '../other/NavBar';
import { Redirect } from 'react-router-dom';

const Astronauts = props => {

    let [astronauts, setAstronauts] = useState(null);

    useEffect(() => {
        let cancelledPromise = false;

        async function findAstronautsInSpace() {
            try {
                let astronautsInSpace = await getAstronauts();
                if (!cancelledPromise) {
                    setAstronauts(astronautsInSpace);
                }
            } catch (error) {
                console.log('An error occured while getting astronauts in space.')
            }
        }

        findAstronautsInSpace();

        return () => {
            cancelledPromise = true;
        }
    }, [])

    function getAstronauts() {
        return fetch(`${process.env.REACT_APP_SERVER_URL}/astronauts`, {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(response => {
                return response.json()
            }).then((results) => {
                if (results.status === "error") {
                    return null;
                } else {
                    return results.people;
                }
            })
    }

    function getNameSearchString(astronaut) {
        let names = astronaut.split(" ");
        let namesString = names.join("+");
        return namesString;
    }

    if (!props.isAuthenticated) {
        return (
            <Redirect to="/" />
        )
    }

    return (

        <div className="pt-5 screen-content">
            <div className="container">

                <div className="row text-center">
                    <div className="col">
                        <h1 className="pb-4">👩🏾‍🚀 Astronauts In Space Directory 👨🏻‍🚀</h1>
                        <p> Click on each astronaut or craft to learn more.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center d-flex justify-content-center">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Craft</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {astronauts ? astronauts.map((astronaut, index) => {
                                        return (
                                            <tr key={`astronaut-${index}`}>
                                                <td><a target="_blank" rel="noopener noreferrer" href={`http://www.google.com/search?q=${getNameSearchString(astronaut.name)}`}>{astronaut.name}</a></td>
                                                <td><a target="_blank" rel="noopener noreferrer" href={`http://www.google.com/search?q=${astronaut.craft}`}>{astronaut.craft}</a></td>
                                            </tr>
                                        )
                                    }) :
                                        <tr><td>
                                            <div>
                                                <div className="spinner-border text-light" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                <div className="text-light">Loading...</div>
                                            </div>
                                        </td></tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Astronauts;