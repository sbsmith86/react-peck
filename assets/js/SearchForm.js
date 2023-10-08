import React from 'react';

const SearchForm = () => {
    // Key should be in env variable
    return (
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Zip Code" aria-label="Zip Code" />
            <button className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">Search
            </button>
          </div>
        </form>
    );
}

export default SearchForm;