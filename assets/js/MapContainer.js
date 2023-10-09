import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const MapContainer = ({searchResults}) => {
    // console.log("map container", searchResults);
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
                >
                    <Marker position={{ lat: 37.773972, lng: -122.431297 }} />
                    {console.log("render map", searchResults)}
                    {searchResults.map((truck) => console.log(truck))}

                    {searchResults.map((truck) => <Marker key={truck.objectid} position={{ lat: parseInt(truck.location.latitude), lng: parseInt(truck.location.longitude) }} />)}

{/* 37.7890° N, 122.3915° W */}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default MapContainer;