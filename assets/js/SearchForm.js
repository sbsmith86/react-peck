import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({
  validateLocation,
  showValidationError,
  setShowValidationError,
  setSearchResults
}) => {
  const [formData, setFormData] = useState({
    zipCode: "",
    radius: 50
  });

  const isUSAZipCode = (str) => {
    return /^\d{5}(-\d{4})?$/.test(str);
  }

  const getLatAndLong = (locationResponse) => {

    return {
      lat: locationResponse.geometry.location.lat,
      lng: locationResponse.geometry.location.lng
    }
  }

  const handleSearch = async (coordinates, radius) => {
    const response = await axios.post('api/foodtrucks', {
      lat: coordinates.lat,
      lng: coordinates.lng,
      radius: radius
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
        const truckresults = await handleSearch(coordinates, formData.radius);
        setSearchResults(truckresults);
      } else {
        setShowValidationError("We can only search in San Francisco");
        console.log("not valid");
      }

    } else {
      setShowValidationError("Please enter a valid zip code.");
    }
  }

  const handleRadiusSelect = (e) => {
    e.preventDefault();
    formData.radius = e.target.value;
  }

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="border-b my-4">
        <input className="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" value={formData.zipCode} onChange={(e) => setFormData({...formData, zipCode: e.target.value})} type="text" name="zipcode" placeholder="Enter Zip Code" id="zipcode" />
      </div>


      <p className="text-sm mb-2">Select the radius you would like to search in:</p>
      <div className="relative w-64 mb-4">
        <select onChange={handleRadiusSelect}  className="block appearance-none w-full border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline">
          <option>50</option>
          <option>100</option>
          <option>400</option>
          <option>1000</option>
        </select>
      </div>


      <input type="submit" className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded" value="Submit" />

      {showValidationError && (<p className='text-red-500'>{showValidationError}</p>) }
    </form>
  );
}

export default SearchForm;
