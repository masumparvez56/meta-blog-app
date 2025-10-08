import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-accent text-primary py-8'>
            <div className='section-container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8'>
                    {/* about section */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>About Us</h3>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                        <div className='mt-5'>
                            <p className='text-base'><strong>Email:</strong> info@meta.net</p>
                            <p className='text-base'><strong>Phone:</strong>  +880112-3456789</p>
                        </div>
                    </div>

                    {/* Quick Link */}
                    <div className='md:pl-16'>
                        <h3 className='text-lg font-semibold mb-4'>Quick Link</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link to="/" className='hover:text-secondary'>Home</Link>
                            </li>
                            <li>
                                <Link to="/" className='hover:text-secondary'>About</Link>
                            </li>
                            <li>
                                <Link to="/" className='hover:text-secondary'>Blog</Link>
                            </li>
                            <li>
                                <Link to="/" className='hover:text-secondary'>Author</Link>
                            </li>
                            <li>
                                <Link to="/" className='hover:text-secondary'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Category */}
                    <div className='md:pl-10'>
                        <h3 className='text-lg font-semibold mb-4'>Category</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link to="/" className='hover:text-secondary'>Lifestyle</Link>
                            </li>
                            <li>
                                <Link to="/" className='hover:text-secondary'>Technology</Link>
                            </li>
                            <li>
                                <Link to="/" className='hover:text-secondary'>Travel</Link>
                            </li>
                            <li>
                                <Link to="/" className='hover:text-secondary'>Business</Link>
                            </li>
                            <li>
                                <Link to="/" className='hover:text-secondary'>Economy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* NewsLetter */}
                    <div className='bg-white hidden sm:block rounded-lg'>
                        <div className='px-4 py-6 text-center'>
                            <h3 className='text-lg font-semibold mb-4'>Weekly Newsletter</h3>
                            <p className='text-gray-400 text-sm mb-2'>Get blog articles and offers via email</p>
                            <form className='space-y-3'>
                                <input type="email" placeholder='Your Email' className='bg-gray-100 rounded-lg py-2 px-4 w-full focus:outline-none' />
                                <button type='submit' className='bg-secondary text-white rounded-lg py-2 px-4 w-full'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;