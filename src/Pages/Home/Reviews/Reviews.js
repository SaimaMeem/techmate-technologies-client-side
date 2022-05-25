import React from 'react';
import Review from './Review';
import customer1 from '../../../images/customers/3.jpg';
import customer2 from '../../../images/customers/1.jpg';
import customer3 from '../../../images/customers/6.jpg';
import customer4 from '../../../images/customers/7.jpg';
const Reviews = () => {
    return (
        <section className='text-black my-14' id='reviews'>
            <h3 className="leading-tight text-3xl font-bold my-10 text-black">Reviews</h3>
            <div className="mb-20 text-black px-10 md:px-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-6 text-center">
                    <Review name="Saima" image={customer1} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, delectus exercitationem sed cumque ducimus necessitatibus eius dolores molestiae'}></Review>
                </div>
            </div>
        </section>
    );
};

export default Reviews;