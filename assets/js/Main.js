import React, { useEffect, useState } from "react";
import MapContainer from "./MapContainer";
import SearchForm from "./SearchForm";

export default function Main(props) {
  return (
    <div>
      <div className="flex justify-center my-8">
        {/* @TODO - Header Component */}
        <h3 class="text-3xl font-bold">Enter your zip code to find a food truck near you</h3>
      </div>
      <div className="flex justify-center py-4">
        <SearchForm />
      </div>
      <div className="bg-blue-100">
        <MapContainer />
      </div>
    </div>
  );
}