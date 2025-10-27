import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.blogs))
            .catch(error => console.error("Error fetching blog data:" + error))
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            try {
                await axios.delete(`http://localhost:5000/blogs/${id}`)
                setBlogs(blogs.filter(blog => blog._id !== id))
                alert("Blog deleted Successfully")
            } catch (error) {
                console.log("Error deleting blog: " + error);
            }
        }

    }
    return (
        <section className='section-container py-16 mt-12'>
            <h2 className='text-2xl font-bold mb-6'>Manage Your Blogs</h2>
            <div>
                {
                    blogs.length > 0 ? (
                        <table className="w-full text-left table-auto min-w-max">
                            <thead>
                                <tr className='bg-gray-100'>
                                    <th className="p-4 border-b border-slate-60">
                                        <p className="text-sm font-normal leading-none">
                                            Title
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-slate-60">
                                        <p className="text-sm font-normal leading-non">
                                            Author
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-slate-600">
                                        <p className="text-sm font-normal leading-non">
                                            Date
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-slate-600">
                                        <p className="text-sm font-normal leading-non">
                                            Actions
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    blogs.map((blog, index) => (
                                        <tr key={index}>
                                            <td className="p-4 border-b border-slate-700">
                                                <p className="text-sm font-semibold">
                                                    <span>{index + 1}. </span>   {blog.title}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-700">
                                                <p className="text-sm">
                                                    {blog.author.name}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-slate-700">
                                                <p className="text-sm ">
                                                    {
                                                        blog?.date ? <span>{new Date(blog.date).toDateString()}</span> : <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                                                    }
                                                </p>
                                            </td>
                                            <td className="p-4 text-sm border-b border-slate-700 space-x-2">
                                                <Link to={`/blogs/${blog._id}`} className='bg-blue-500 text-white px-2 py-1 hover:bg-blue-600'>
                                                    View
                                                </Link>
                                                <Link to={`/blogs/edit/${blog._id}`} className='bg-yellow-500 text-white px-2 py-1 hover:bg-yellow-600'>
                                                    Edit
                                                </Link>
                                                <Link to={`/blogs/${blog._id}`} className='bg-red-500 text-white px-2 py-1 hover:bg-red-600'>
                                                    <button onClick={() => handleDelete(blog?._id)}>Delete</button>
                                                </Link>

                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    ) : <div>No data Found</div>
                }

            </div>
        </section>
    );
};

export default ManageBlogs;