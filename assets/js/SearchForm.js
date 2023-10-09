import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({validateLocation, showValidationError, setShowValidationError}) => {
  const [formData, setFormData] = useState({
    zipCode: "",
  });

  const [searchResults, setSearchResults] = useState([]);

  const isUSAZipCode = (str) => {
    return /^\d{5}(-\d{4})?$/.test(str);
  }

  const getLatAndLong = (locationResponse) => {

    return {
      lat: locationResponse.geometry.location.lat,
      lng: locationResponse.geometry.location.lng
    }
  }

  const handleSearch = async (coordinates) => {
    const response = await axios.post('api/foodtrucks', {
      lat: coordinates.lat,
      lng: coordinates.lng
    });

    return JSON.parse(response.data);
  }

  const getCity = (data) => data.address_components[1].short_name;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isUSAZipCode(formData.zipCode)) {
      const response = await validateLocation(formData.zipCode);
      const coordinates = getLatAndLong(response);

      if (getCity(response) === "SF") {
        setShowValidationError("");
        const truckresults = await handleSearch(coordinates);
        console.log(truckresults);
      } else {
        setShowValidationError("We can only search in San Francisco");
        console.log("not valid");
      }

    } else {
      setShowValidationError("Please enter a valid zip code.");
    }
  }

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="flex items-center border-b py-2">
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" value={formData.zipCode} onChange={(e) => setFormData({...formData, zipCode: e.target.value})} type="text" name="zipcode" id="zipcode" />
        <input type="submit" className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded" value="Submit" />
      </div>
      {showValidationError && (<p className='text-red-500'>{showValidationError}</p>) }
    </form>
  )
}

export default SearchForm;
