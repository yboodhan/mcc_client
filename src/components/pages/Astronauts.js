import React, { useEffect, useState } from 'react'

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

    return (
        <div className="Astronauts d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h1 className="pb-4">Astronauts In Space Directory</h1>

                <div className="table-responsive">
                    <table className="table table-striped table-dark table-hover" style={{ maxHeight: '60vh' }}>
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
                                        <td>{astronaut.name}</td>
                                        <td>{astronaut.craft}</td>
                                    </tr>
                                )
                            }) :
                                <tr><td>No astronauts to see.</td></tr>
                            }
                        </tbody>
                    </table>
                </div>

                <div className="p-4">
                    <a className="nav-link active" href="/location" title="Go to the ISS Location page">
                        <button>
                            Learn more about the ISS craft and it's location.
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Astronauts;