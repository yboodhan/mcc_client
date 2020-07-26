import React, { useState, useEffect } from 'react';
import NavBar from '../other/NavBar';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import IssImage from '../../static/iss.png';

const Location = props => {

    let [coordinates, setCoordinates] = useState(null);
    let [mymap, setMap] = useState(null);
    let [shadowMarker, setShadowMarker] = useState(null);
    let [issMarker, setIssMarker] = useState(null);
    let [lastUpdated, setLastUpdated] = useState(new Date().toString());

    useEffect(() => {
        // Polling every 6 seconds to not crash API
        let POLLING_DELAY_IN_MILLISECONDS = 5000;

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

        let circle = L.circleMarker([51.505, -0.09], {
            color: 'coral',
            fillColor: 'coral',
            fillOpacity: 0.3,
            radius: 80,
        }).addTo(mymap);

        let issIcon = L.icon({
            iconUrl: IssImage,
            iconSize: [50, 50], // size of the icon
            iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
        });

        let issIconMarker = L.marker([51.505, -0.09], { icon: issIcon }).addTo(mymap);

        setIssMarker(issIconMarker);
        setShadowMarker(circle);

        async function findIssLocation() {
            try {
                let issCoordinatesResponse = await getCoordinates();
                setCoordinates(issCoordinatesResponse.iss_position);
            } catch (error) {
                console.log('An error occured while getting coordinates.')
                // TODO: proper error dealing code
            }
        }

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
            shadowMarker.setLatLng(newLatLng);
            issMarker.setLatLng(newLatLng);
            mymap.panTo(new L.LatLng(coordinates.latitude, coordinates.longitude));
            setLastUpdated(new Date().toString());
        }
    }, [coordinates])

    function getCoordinates() {
        return fetch(`${process.env.REACT_APP_SERVER_URL}/location`, {
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
        <div className="pt-5 screen-content">
            <div className="container">

                <div className="row pb-1 text-center">
                    <div className="col">
                        <h1 className="pb-1">Internation Space Station (ISS) Location</h1>
                        {coordinates ?
                            <div>
                                <p>Last Updated: {lastUpdated}</p>
                                <p>Location [lat,long]: [{coordinates.latitude}, {coordinates.longitude}]</p>
                            </div>
                            :
                            <p>Finding location...</p>
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div id="map" style={{ height: '35vh', width: '50vw' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location;