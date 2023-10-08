import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyles = {
        height: "600px",
        width: "100%"
    };

    // Default to SF
    const defaultCenter = {
        lat: 37.773972,
        lng: -122.431297
    }
    // Key should be in env variable
    return (
        <div>
            <LoadScript googleMapsApiKey='AIzaSyCHaBrH4J2JxZtLO840VNEkM3jF-1QWJ1s'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                />
            </LoadScript>
        </div>
    )
}

export default MapContainer;