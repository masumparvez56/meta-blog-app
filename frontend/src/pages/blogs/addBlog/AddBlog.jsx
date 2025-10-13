import React from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';

const AddBlog = () => {
    return (
        <div className='section-container py-16 mt-12'>
            <h2 className='text-2xl font-bold mb-6'>Add New Blog</h2>

            {/* form */}
            <div>
                <form className='bg-white p-6 rounded-lg max-w-3xl shadow-md space-y-4'>
                    <InputField
                        label="Blog Title"
                        id="title"
                        type="text"
                        placeholder="Blog Title"
                    />
                    {/* text area */}
                    <TextAreaField
                        label="Blog Description"
                        id="description"
                        type="text"
                        placeholder="Blog Description"
                    />

                    <InputField
                        label="Author Name"
                        id="authorName"
                        type="text"
                        placeholder="Author Name"
                    />

                    <InputField
                        label="Author Image URL"
                        id="authorImage"
                        type="url"
                        placeholder="Author Image URL"
                    />

                    <InputField
                        label="Blog Image URL"
                        id="image"
                        type="url"
                        placeholder="Blog Image URL"
                    />




                    <div>
                        <button
                            type='submit'
                            className='w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;