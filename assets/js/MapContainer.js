import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
    const [positionLoaded, setPositionLoaded] = useState(false);
    const [position, setPosition] = useState({});

    const getPositionSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setPosition({ latitude, longitude });
        setPositionLoaded(true);
    }

    const getPositionError = () => console.log("Unable to retrieve your location");

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError);
          } else {
            console.log("Geolocation not supported");
          }
    }, []);

    const mapStyles = {
        height: "600px",
        width: "100%"
    };

    const defaultCenter = {
        lat: position.latitude, lng: position.longitude
    }
    // Key should be in env variable
    return (
        <div>
            {positionLoaded ? (
                <LoadScript googleMapsApiKey='AIzaSyCHaBrH4J2JxZtLO840VNEkM3jF-1QWJ1s'>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={defaultCenter}
                    />
                </LoadScript>
            ) : <p>Map Loading...</p>}
        </div>
    )
}

export default MapContainer;