import React, { useContext, useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { BlogContext } from '../../context/BlogContext';

const BlogList = () => {
    const {searchTerm} = useContext(BlogContext)

    const [isLoading, setIsLoading] = useState(true)
    const [blogs, setBlogs] = useState([]);
    const [showBlogs, setShowBlogs] = useState(6)
    useEffect(() => {
        fetch('https://meta-blog-app-ten.vercel.app/blogs')
        .then(res => res.json())
        .then(data =>{
          setBlogs(data.blogs) 
          setIsLoading(false) 
        })
        .catch(error => console.error("Error fetching blog data:" + error))
    }, [])

    // filter blogs based on title
    const filteredBlogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        blog.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
        blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // handle view more blog
    const handleMoreBlog = () => {
       setShowBlogs(prev => prev + 3) 
    }

    if(isLoading) return <div className='h-20'>Loading...</div>
    return (
        <div className=' container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                  filteredBlogs.slice(0, showBlogs).map((blog, index) => (
                    <BlogCard key={index} blog={blog}/>
                  ))
                }
            </div>

            {
                showBlogs < filteredBlogs.length && (
                    <div className='flex justify-center items-center mt-8 mb-5'>
                        <button onClick={handleMoreBlog} className='bg-secondary rounded-md text-white hover:bg-secondary/80 font-semibold flex items-center justify-center px-5 py-1.5 gap-1 transition-colors duration-200'>View More</button>
                    </div>
                )
            }
        </div>
    );
};

export default BlogList;