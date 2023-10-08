import React, { useEffect, useState } from "react";
import MapContainer from "./MapContainer";
import SearchForm from "./SearchForm";

export default function Main(props) {
  // const [zipCode, setZipCode] = useState("");

  const handleSearch = (zipCodeVal) => {
    console.log(zipCodeVal);
  }

  return (
    <div>
      <div className="flex justify-center my-8">
        {/* @TODO - Header Component */}
        <h3 className="text-3xl font-bold">Enter your zip code to find a food truck near you</h3>
      </div>
      <div className="flex justify-center py-4">
        <SearchForm handleSearch={handleSearch} />
      </div>
      <div className="bg-blue-100">
        <MapContainer />
      </div>
    </div>
  );
}