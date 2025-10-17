import React from 'react';
import authorImg from '../../assets/authors/author-1.png'
import blogImg from '../../assets/blogs/blog-1.png'

const BlogDetails = () => {
    return (
        <div className='section-container my-8'>
            <div>
                <h2 className='text-2xl font-semibold mb-4'>Understanding The Most Important React Context API </h2>
                <div className='flex items-center mb-4'>
                    <img src={authorImg} alt="" className='w-10 h-10 rounded-full mr-3'/>
                    <div>
                        <p className='text-lg font-medium'>Tracey Wilson</p>
                        <p className='text-gray-500'>17/01/2025</p>
                    </div>
                </div>
                <img src={blogImg} alt="" className='w-full md:h-[540px] rounded-md object-cover mb-4'/>
                <div className='space-y-4'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus consequuntur eligendi, dolore veniam temporibus commodi pariatur, debitis officiis consequatur sapiente porro ad sint iste distinctio.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, debitis molestias ducimus laborum error sapiente distinctio beatae iure consequuntur praesentium. Fugiat, iusto consequuntur. Ea cupiditate ipsam perferendis iure sed, cumque, aliquam maiores mollitia quibusdam nihil ipsa numquam voluptatum modi atque assumenda dolor distinctio perspiciatis aut a dolores vitae doloribus. Eveniet tempora dignissimos laudantium! A odit ex nemo ut, labore voluptatem optio dolorem! Cupiditate dicta modi blanditiis temporibus culpa. Eligendi aperiam tempora autem eos ad labore alias laboriosam molestiae veniam atque accusantium quibusdam, quidem porro omnis, itaque error deleniti quae quam voluptas pariatur repudiandae dignissimos. Iste quibusdam nulla vero iure hic facilis exercitationem dolore eligendi? Aliquam quis culpa dolorem incidunt aperiam accusamus obcaecati officiis. Hic, tempora excepturi. Alias a minus maxime sequi assumenda possimus amet nemo! Exercitationem similique voluptatibus laudantium aperiam. Nemo veritatis similique id inventore laboriosam assumenda eligendi itaque. Velit atque numquam at mollitia eum doloribus, tempora pariatur architecto vero! Excepturi similique explicabo harum! Dignissimos quae, iure, numquam accusantium expedita maiores odio distinctio consequuntur eos sapiente beatae rem voluptatem modi repellat aspernatur doloribus laboriosam nihil praesentium? Nisi animi excepturi architecto voluptas porro eos adipisci maiores. Ullam temporibus eos, totam explicabo voluptate aliquam, nemo corporis veritatis voluptatum earum facere alias quidem?</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;