import React, { useContext, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { BlogContext } from '../context/BlogContext';

const Search = () => {
    const {searchTerm, setSearchTerm} = useContext(BlogContext)
    const [inputValue, setInputValue] = useState()
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSearch = () => {
        setSearchTerm(inputValue)
    }
    return (
        <div className='relative'>
            <input type="text" placeholder='Search...'
            onChange={handleInputChange}
            className='bg-[#F4F4F5] py-2 px-4 focus:outline-none rounded-full' 
            />

            <button>
                <FaSearch onClick={handleSearch} className='absolute right-4 top-3 hover:text-secondary'/>
            </button>
        </div>
    );
};

export default Search;