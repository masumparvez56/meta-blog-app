import React from 'react';
import Banner from '../../components/Banner';
import BlogList from './BlogList';

const Blogs = () => {
    return (
        <section className='section-container'>
            <Banner/>
            <BlogList/>
        </section>
    );
};

export default Blogs;