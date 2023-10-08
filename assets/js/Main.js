import React, { useEffect, useState } from "react";
import MapContainer from "./MapContainer";

export default function Main(props) {
  return (
    <div>
      <div className="flex justify-center">
        <p className="my-6">Enter your zip code to find a food truck near you</p>
      </div>
      <div className="flex justify-center py-4">
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Zip Code" aria-label="Zip Code" />
            <button className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="bg-blue-100">
        <MapContainer />
      </div>
    </div>
  );
}