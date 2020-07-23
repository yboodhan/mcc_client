import React, { useEffect, useState } from 'react'

const Astronauts = props => {

    let [astronauts, setAstronauts] = useState(null);

    useEffect(() => {
        findAstronautsInSpace();
    }, [])

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

    function getAstronauts() {
        return fetch(`${process.env.REACT_APP_SERVER_URL}/astronauts`)
            .then(response => {
                return response.json()
            }).then((results) => {
                return results;
            })
    }

    return (
        <div className="Astronauts">
            <div className="table-responsive">
                <table className="table table-striped table-dark table-hover" style={{ maxHeight: '60vh' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Craft</th>
                        </tr>
                    </thead>
                    <tbody>
                        {astronauts ? astronauts.map((astronaut, index) => {
                            return (
                                <tr key={`astronaut-${index}`}>
                                    <th scope="row">{index + 1}</th>
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
        </div>
    )
}

export default Astronauts;