import React, { useState, useEffect } from 'react';
import L, { map } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Location = props => {
    // Polling every 6 seconds to not crash API
    let POLLING_DELAY_IN_MILLISECONDS = 6000;

    let [coordinates, setCoordinates] = useState(null);
    let [mymap, setMap] = useState(null);
    let [marker, setMarker] = useState(null);

    useEffect(() => {
        // Initialize the map by calling API once and setting the initial focus
        let mymap = L.map('map', {
            center: [51.505, -0.09],
            zoomControl: false,
            zoom: 1.5
        });

        setMap(mymap);

        // Add the map tile layer to the map container
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);

        let circle = L.circle([51.505, -0.09], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(mymap);

        setMarker(circle);

        // Call location API once upon load to pan almost immediately
        findIssLocation();

        // Poll the location API for the ISS location upon mount
        const locationIntervalId = setInterval(findIssLocation, POLLING_DELAY_IN_MILLISECONDS);

        // Clear polling after component is unmounted
        return () => clearInterval(locationIntervalId);
    }, [])

    useEffect(() => {
        if (coordinates) {
            let newLatLng = new L.LatLng(coordinates.latitude, coordinates.longitude);
            marker.setLatLng(newLatLng);
            mymap.panTo(new L.LatLng(coordinates.latitude, coordinates.longitude));
        }
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