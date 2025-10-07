import React from 'react';
import Banner from '../../components/Banner';
import BlogList from '../blogs/BlogList';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <section className='section-container'>
           <Banner/>
           <BlogList/>
           <NewsLetter/>
        </section>
    );
};

export default Home;