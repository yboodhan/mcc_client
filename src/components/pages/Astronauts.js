import React, { useEffect, useState } from 'react'
import NavBar from '../other/NavBar';

const Astronauts = props => {

    let [astronauts, setAstronauts] = useState(null);

    useEffect(() => {
        async function findAstronautsInSpace() {
            try {
                let astronautsInSpaceResponse = await getAstronauts();
                console.log(astronautsInSpaceResponse.people)
                setAstronauts(astronautsInSpaceResponse.people);
            } catch (error) {
                console.log('An error occured while getting astronauts in space.')
                // TODO: proper error dealing code
            }
        }

        findAstronautsInSpace();
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
                return results;
            })
    }

    function getNameSearchString(astronaut) {
        let names = astronaut.split(" ");
        let namesString = names.join("+");
        return namesString;
    }

    return (

        <div className="pt-5 screen-content">
            <div className="container">

                <div className="row pb-5 text-center">
                    <div className="col">
                        <h1 className="pb-4">Astronauts In Space Directory</h1>
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
                                        <tr><td>No astronauts to see.</td></tr>
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