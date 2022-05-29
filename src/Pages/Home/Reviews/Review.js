import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({review}) => {
    const {username,image,comment,address,rating} = review;
    return (
        <div>
        <div className="block rounded-lg shadow-lg bg-white">
            <div className="overflow-hidden rounded-t-lg h-28 bg-light-red"></div>
            <div className="w-28 h-28 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white"  data-mdb-ripple="true"  data-mdb-ripple-color="light">
                <img src={image} alt='' />
            </div>
            <div className="px-6 py-2 h-80">
                <h4 className="text-2xl font-semibold mb-1">{username}</h4>
                <h4 className="text-md font-semibold mb-2"><FontAwesomeIcon icon={faLocationDot}> </FontAwesomeIcon>&nbsp;{address}
               </h4>
               {[...Array(rating)].map((star,ind)=><FontAwesomeIcon key={ind} className='text-[rgb(247,144,40)]' icon={faStar}></FontAwesomeIcon>)}
               {[...Array(5-rating)].map((star,ind)=><FontAwesomeIcon key={ind}className='text-gray-500' icon={faStar}></FontAwesomeIcon>)}
                <hr className='mt-4' />
                <p className="my-4 font-medium text-left">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                    </svg>
              {comment}   
                </p>
                <hr />
            </div>
        </div>
    </div>
    );
};

export default Review;