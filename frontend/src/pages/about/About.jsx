import React from 'react';

const About = () => {
    return (
        <section className='pt-24 pb-12'>
            <div className='section-container text-primary'>
                {/* hero */}
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-semibold'>About Us</h1>
                    <p className='mt-5'>Learn more about our company, our mission, and the team that drives us forward. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam libero obcaecati. Earum veniam debitis, repellendus omnis fugit sequi. Quia quaerat voluptatem, dolores vel officiis nulla corrupti nemo dolorem omnis?</p>
                </div>

                {/* mission */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20'>
                    <div>
                        <h2 className='text-3xl font-semibold mb-4'>Our Mission</h2>
                        <p className='mb-4'>We are dedicated to providing the best solutions for our customers by focusing on quality, innovation, and customer satisfaction. Our mission is to help you succeed in the digital age by delivering reliable and impactful digital products and services.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magnam ea cumque iusto tenetur hic corporis, maiores aliquam omnis officia. perspiciatis sint mollitia, inventore repellat eos repellendus beatae nemo tempora!</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full md:h-96 rounded-lg shadow-lg hover:scale-95 transition-all duration-200' />
                    </div>
                </div>

                {/* vission */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20'>
                    <div className='order-1 md:order-2'>
                        <h2 className='text-3xl font-semibold mb-4'>Our Vission</h2>
                        <p className='mb-4'>We envision a world where businesses can seamlessly transition into the digital landscape, gaining the tools and knowledge they need to thrive. Our vision is to create innovative solutions that empower businesses globally.</p>
                    </div>

                    <div className='order-2 md:order-1'>
                        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full md:h-96 rounded-lg shadow-lg hover:scale-95 transition-all duration-200' />
                    </div>
                </div>

                {/* team section */}
                <div>
                    <h2 className='text-3xl text-center font-semibold mb-12'>Meet Our Team</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer'>
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-28 h-28 rounded-full mx-auto mb-4' />
                            <h3 className='text-xl text-gray-700'>Jane Smith</h3>
                            <p className='text-gray-500'>CEO</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer'>
                            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-28 h-28 rounded-full mx-auto mb-4' />
                            <h3 className='text-xl text-gray-700'>John Doe</h3>
                            <p className='text-gray-500'>CTO</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer'>
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-28 h-28 rounded-full mx-auto mb-4' />
                            <h3 className='text-xl text-gray-700'>Jack Nackos</h3>
                            <p className='text-gray-500'>Lead Developer</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer'>
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-28 h-28 rounded-full mx-auto mb-4' />
                            <h3 className='text-xl text-gray-700'>Christian Buehner</h3>
                            <p className='text-gray-500'>Project Manager</p>
                        </div>
                    </div>
                </div>

                {/* banner for contact info */}

                <div className='py-12 bg-secondary text-white mt-16 rounded-md h-full flex items-center justify-center text-center'>
                    <div className='space-y-3 p-4'>
                        <h2 className='text-2xl font-bold text-white'>Want to Work with Us</h2>
                        <p className='text-lg text-white'> Get in touch and let's build something amazing together</p>
                        <button className='bg-white hover:bg-primary/30 hover:text-white text-secondary font-bold py-2 px-8 rounded-full'>Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;