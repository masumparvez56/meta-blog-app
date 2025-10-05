import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from "../assets/blogs/blog-0.png"
import authorImg from "../assets/author.png"

const Banner = () => {
    return (
        <div className='my-16'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl font-semibold mb-4'>Meta Blog</h1>
                <ul className='flex flex-wrap items-center justify-center gap-4'>
                    <li>
                        <Link to="/" className='bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary hover:underline underline-offset-4'>Home</Link>
                    </li>
                    <li>
                        <Link to="/add-blog" className='bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary hover:underline underline-offset-4'>Add New Blog</Link>
                    </li>
                    <li>
                        <Link to="/manage-blog" className='bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary hover:underline underline-offset-4'>Manage Blog</Link>
                    </li>
                </ul>
            </div>
            {/* banner Image */}
            <div className='text-white'>
                <div className='md:min-h-[450px] h-80 w-full bg-center bg-cover bg-no-repeat rounded-md' style={{backgroundImage:`url(${bannerImg})`}}>
                    <div className='flex flex-col h-full justify-end p-5'>
                        <span className='bg-secondary text-center max-w-36 px-3 py-1 rounded-md mb-3'>Technology</span>
                        <h2 className='text-2xl sm:text-3xl font-semibold md:w-1/2 mb-5'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        <div className='flex items-center gap-1'>
                            <img src={authorImg} alt="" className='size-7'/>
                            <div className='flex flex-wrap items-center space-x-2'>
                                <span className='ml-2 text-base cursor-pointer hover:underline hover:underline-offset-2'>Tracey Wilson</span>
                                <span className='text-sm italic ml-2'>August 20, 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;