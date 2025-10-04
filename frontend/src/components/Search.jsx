import React from 'react';
import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div className='relative'>
            <input type="text" placeholder='Search...'
            className='bg-[#F4F4F5] py-2 px-4 focus:outline-none rounded-full' 
            />

            <button>
                <FaSearch className='absolute right-4 top-3 hover:text-secondary'/>
            </button>
        </div>
    );
};

export default Search;