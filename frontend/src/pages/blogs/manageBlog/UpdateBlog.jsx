import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../addBlog/InputField';
import TextAreaField from '../addBlog/TextAreaField';

const UpdateBlog = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const blogData = {
            title: data.title,
            description: data.description,
            image: data.image,
            author: {
                name: data.authorName,
                image: data.authorImage
            }
        }

        console.log(blogData)
    };
    return (
        <div className='section-container py-16 mt-12'>
            <h2 className='text-2xl font-bold mb-6'>Update Blog</h2>

            {/* form */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-6 rounded-lg max-w-3xl shadow-md space-y-4'>
                    <InputField
                        label="Blog Title"
                        id="title"
                        type="text"
                        register={register("title", { required: true })}
                        placeholder="Blog Title"
                    />
                    {/* text area */}
                    <TextAreaField
                        label="Blog Description"
                        id="description"
                        type="text"
                        register={register("description", { required: true })}
                        placeholder="Blog Description"
                    />

                    <InputField
                        label="Author Name"
                        id="authorName"
                        type="text"
                        register={register("authorName", { required: true })}
                        placeholder="Author Name"
                    />

                    <InputField
                        label="Author Image URL"
                        id="authorImage"
                        type="url"
                        register={register("authorImage", { required: true })}
                        placeholder="Author Image URL"
                    />

                    <InputField
                        label="Blog Image URL"
                        id="image"
                        type="url"
                        register={register("image", { required: true })}
                        placeholder="Blog Image URL"
                    />




                    <div>
                        <button
                            type='submit'
                            className='w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;