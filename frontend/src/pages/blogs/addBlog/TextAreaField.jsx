import React from 'react';

const TextAreaField = ({ label, id, placeholder }) => {
    return (
        <div>
            <label htmlFor="message" className='block text-gray-700 text-sm font-bold mb-2'>
                {label}
            </label>
            <textarea
                placeholder={placeholder} rows="4"
                id={id}
                type="text"
                className='w-full px-4 py-2 rounded-lg border border-accent text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500'></textarea>
        </div>
    );
};

export default TextAreaField;