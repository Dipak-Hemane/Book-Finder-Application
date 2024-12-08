import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch} className="flex justify-center items-center">
            <input 
               type="text" 
               placeholder="Search"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               className="w-full md:w-3/4 p-2 border border-black rounded-lg shadow-sm focus:outline-none focus:right-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="ml-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                Search
            </button>
        </form>
    );
};

export default SearchBar;