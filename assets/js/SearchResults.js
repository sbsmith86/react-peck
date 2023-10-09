import React, { useState, useEffect } from 'react';

const SearchResults = ({searchResults}) => {
    const mapStyles = {
        height: "600px",
        width: "100%"
    };

    const getColor = (status) => {
        let colorClass = ""
        switch(status) {
            case "REQUESTED":
                colorClass =  "bg-yellow-500"
                break;
            case "EXPIRED":
                colorClass =  "bg-red-200"
                break;
            case "SUSPEND":
                colorClass =  "bg-red-500"
                break;
            default:
                colorClass = "bg-green-600"
        }

        return colorClass;
    }

    return (

        <div>
            {searchResults.length ? (
                searchResults.map((truck) => {
                    return (
                        <div key={truck.objectid} className={`block w-full rounded-lg ${getColor(truck.status)} text-left my-4`}>
                            <div className="p-6">
                                <p className="text-base text-neutral-600 font-bold">
                                    {truck.applicant}
                                </p>
                                <p className="text-base text-neutral-600">
                                    {truck.address}
                                </p>
                                <p className="text-base text-neutral-600">
                                    {truck.fooditems}
                                </p>
                                <p className="text-base text-neutral-600">
                                    {truck.status}
                                </p>
                            </div>
                        </div>
                    )
                })
            ) : <div>No results.</div>}

        </div>
    )
}

export default SearchResults;