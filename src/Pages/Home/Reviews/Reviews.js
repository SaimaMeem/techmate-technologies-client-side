import React, { useEffect, useState } from 'react';
import Review from './Review';
import customer1 from '../../../images/customers/3.jpg';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [reviews]);
    return (
        <section className='text-black my-14' id='reviews'>
            <h3 className="leading-tight text-3xl font-bold my-10 text-black">Reviews</h3>
            <div className="mb-20 text-black px-10 md:px-20">
                <div className="grid md:grid-cols-2  grid-cols-1 xl:grid-cols-4 gap-6 text-center">
                    {
                        reviews.slice(0,4).map((review,ind) => <Review review={review} key={ind}></Review>)
                    }
                    {/* <Review name="Saima" image={customer1} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, delectus exercitationem sed cumque ducimus necessitatibus eius dolores molestiae'}></Review> */}
                </div>
            </div>
        </section>
    );
};

export default Reviews;