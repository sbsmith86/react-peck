import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import SearchForm from "./SearchForm";
import axios from 'axios';

export default function Main(props) {
  const [showValidationError, setShowValidationError] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getCity = (response) => response.address_components[1];

  const validateLocation = async (zipCodeVal) => {
    setShowValidationError("");

    const result = await axios.post('api/getlocation', {
      zipCode: zipCodeVal,
      });

    return JSON.parse(result.data).results[0];
  };

  return (
    <div>
      <div className="flex justify-center my-8">
        <h3 className="text-2xl font-bold">Enter your SF zip code to find a food truck near you.</h3>
      </div>
      <div className="flex justify-center py-4">
        <SearchForm
          validateLocation={validateLocation}
          setShowValidationError={setShowValidationError}
          showValidationError={showValidationError}
          setSearchResults={setSearchResults}
        />
      </div>
      <div>
        <SearchResults searchResults={searchResults} />
      </div>
    </div>
  );
}