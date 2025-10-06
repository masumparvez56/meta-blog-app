import React from 'react';
import Banner from '../../components/Banner';
import BlogList from '../blogs/BlogList';

const Home = () => {
    return (
        <section className='section-container'>
           <Banner/>
           <BlogList/>
        </section>
    );
};

export default Home;