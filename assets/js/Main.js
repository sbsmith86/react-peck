import React, { useEffect, useState } from "react";
import MapContainer from "./MapContainer";
import SearchForm from "./SearchForm";
import axios from 'axios';

export default function Main(props) {
  const [city, setCity] = useState("");
  const [showValidationError, setShowValidationError] = useState(false);

  const getCity = (response) => response.address_components[1];

  const handleSearch = (zipCodeVal) => {
    axios.post('api/getlocation', {
      zipCode: zipCodeVal,
      }).then(response => {
        if (getCity(JSON.parse(response.data).results[0]).short_name !== "SF") {
          setShowValidationError("We can only search in San Francisco")
        } else {
          setCity("SF")
        }
      }).catch(error => {
        console.error(error);
    });
  };

  return (
    <div>
      <div className="flex justify-center my-8">
        {/* @TODO - Header Component */}
        <h3 className="text-3xl font-bold">Enter your zip code to find a food truck near you</h3>
      </div>
      <div className="flex justify-center py-4">
        <SearchForm
          handleSearch={handleSearch}
          setShowValidationError={setShowValidationError}
          showValidationError={showValidationError}
        />
      </div>
      <div className="bg-blue-100">
        <MapContainer />
      </div>
    </div>
  );
}