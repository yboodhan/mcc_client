import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';

// Components
import Loader from '../other/Loader';

// Renders page with table showing all astronauts currently in space
const Astronauts = props => {

    let [astronauts, setAstronauts] = useState(null);

    // On page load, find all astronauts in space and update state
    useEffect(() => {
        let cancelledPromise = false;

        // Sets astronaut state
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

        // Cancels promise if component is unmounted (redirected)
        return () => {
            cancelledPromise = true;
        }
    }, [])

    // Gets all astronauts currently in space
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
            }).catch((error) => {
                console.log(error)
            })
    }

    // Creates a query string for Google search
    function getSearchString(field) {
        let fields = field.split(" ");
        let queryString = fields.join("+");
        return queryString;
    }

    // Redirect to the home page if user is not authenticated
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
                        <h1 role="heading" className="pb-4"><span role="img" aria-label="astronaut">👩🏾‍🚀</span> Astronauts In Space Directory <span role="img" aria-label="astronaut">👨🏻‍🚀</span></h1>
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
                                                <td><a target="_blank" rel="noopener noreferrer" href={`http://www.google.com/search?q=${getSearchString(astronaut.name)}`}>{astronaut.name}</a></td>
                                                <td><a target="_blank" rel="noopener noreferrer" href={`http://www.google.com/search?q=${getSearchString(astronaut.craft)}`}>{astronaut.craft}</a></td>
                                            </tr>
                                        )
                                    }) :
                                        <tr><td>
                                            <Loader />
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