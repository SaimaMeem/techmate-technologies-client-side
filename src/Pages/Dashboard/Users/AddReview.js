import { faSave, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageTitle from '../../../shared/PageTitle';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const review = {
            username: user?.displayName,
            image: user?.photoURL || `https://i.ibb.co/QPVQmtf/users.png`,
            email: user?.email,
            address: data.address,
            comment: data.comment,
            rating: rating,
        }
        //POST
        fetch('https://murmuring-fortress-11429.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Your Review is submitted')
                    reset();
                }
                else {
                    toast.error('Your Review submission is failed!')
                }
            })
    };
    return (
        <div>
            <PageTitle title={'Dashboard - Add a Review'}></PageTitle>
            <div className='pt-1 pb-24'>
                <h3 className="leading-tight text-2xl font-bold mb-2">  Add Review</h3>
                <div className="flex flex-col p-6 py-10 rounded-lg shadow-lg  bg-white w-full h-full justify-center mx-auto">
                    {/* <div className="flex w-full border-opacity-100"> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>


                            <div className=''>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">

                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="Username" value={user.displayName} disabled readOnly />
                                        <label htmlFor="name" className="text-gray-700">Username</label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">
                                        <textarea className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="3" id="address" placeholder="Address" {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is required'
                                            }
                                        }
                                        )} />
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                        <label htmlFor="address" className="text-gray-700">Address </label>
                                    </div>
                                </div>

                            </div>
                            <div className=''>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">

                                        <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="Email Address" value={user.email} disabled readOnly />
                                        <label htmlFor="email" className="text-gray-700">Email Address</label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">
                                        <textarea rows={10} type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="comment" placeholder="Comments" {...register("comment", {
                                            required: {
                                                value: true,
                                                message: 'Please provide a Comment'
                                            }
                                        }
                                        )} />
                                        {errors.comment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.comment.message}</span>}
                                        <label htmlFor="comment" className="text-gray-700">Comments</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <label htmlFor="rating" className="text-gray-700 text-lg font-semibold">Rating: </label>
                                <input type="text" className="form-control hidden" id="rating" value={rating} {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Please provide a Rating'
                                    }
                                }
                                )} />

                                <div className="star-rating px-3">
                                    {[...Array(5)].map((star, index) => {
                                        index += 1;
                                        return (
                                            <button
                                                type="button"
                                                key={index}
                                                className={index <= (hover || rating) ? "on" : "off"}
                                                onClick={() => setRating(index)}
                                                onMouseEnter={() => setHover(index)}
                                                onMouseLeave={() => setHover(rating)}
                                                onDoubleClick={() => {
                                                    setRating(0);
                                                    setHover(0);
                                                }}
                                            >
                                                <span className="star text-xl"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                {/* <span className="star">&#9733;</span> */}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                            {errors.rating?.type === 'required' && (!hover && !rating) && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        </div>
                        <button type="submit" data-mdb-ripple="true"
                            data-mdb-ripple-color="light" className="ml-auto mt-4 lg:mt-0 inline-block px-8 py-2.5 bg-pastel-green text-white font-bold text-sm leading-tight rounded shadow-md hover:bg-pastel-green-dark hover:shadow-lg focus:bg-pastel-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pastel-green-darker active:shadow-lg transition duration-150 ease-in-out disabled:bg-slate-600"> Submit &nbsp;&nbsp;<FontAwesomeIcon icon={faSave}></FontAwesomeIcon></button>
                    </form>
                    {/* </div> */}
                </div>

            </div>
        </div>
    );
};

export default AddReview;