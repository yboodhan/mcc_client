import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Location = props => {
    // Polling every 6 seconds to not crash API
    let POLLING_DELAY_IN_MILLISECONDS = 6000;

    let [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        var mymap = L.map('map', {
            center: [51.505, -0.09],
            zoomControl: false,
            zoom: 1.5
        });
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);

        const locationIntervalId = setInterval(findIssLocation, POLLING_DELAY_IN_MILLISECONDS);
        return () => clearInterval(locationIntervalId);
    }, [])

    useEffect(() => {
        console.log(coordinates);
        // change the center and marker on the map using coordinates
    }, [coordinates])

    async function findIssLocation() {
        try {
            let issCoordinates = await getCoordinates();
            setCoordinates(issCoordinates);
        } catch (error) {
            console.log('An error occured while getting coordinates.')
            // TODO: proper error dealing code
        }
    }

    function getCoordinates() {
        return fetch(`${process.env.REACT_APP_SERVER_URL}/location`)
            .then(response => {
                return response.json()
            }).then((results) => {
                return results.iss_position;
            })
    }

    return (
        <div className="Location">
            <div id="map" style={{ height: '40vh', width: '70vw' }}></div>
        </div>
    )
}

export default Location;