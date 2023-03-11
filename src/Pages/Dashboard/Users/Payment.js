
import React, { useEffect, useState } from 'react';
import PageTitle from '../../../shared/PageTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1mjLJ060ZXR6VReDC0EF3g5vF4hbWnGpspKGa0o8xNB5Rjww6VD66Sj2ZGHhUvGCbqT7s8qBGpKLsyh1HhfqSZ00twD4WKrX');

const Payment = () => {
    const { orderId } = useParams();
    // const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://techmate-technologies.onrender.com/orders/${orderId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [orderId]);
    // const { register, formState: { errors }, handleSubmit, reset } = useForm();
    //ONSUBMIT

    return (
        <section>
            <PageTitle title={'Checkout Form'}></PageTitle>
            <div className='pt-36 pb-24 w-full'>
                <h3 className="leading-tight text-3xl font-bold"> Checkout Form</h3>

                <div className="md:mx-40 mx-10">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center w-full'>
                        <div className='w-full px-10'>
                            <h3 className="leading-tight text-xl font-bold py-3"> User Information</h3>
                            <div className='shadow-lg rounded-lg p-6 border-2'>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">

                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="Username" value={order?.username} disabled readOnly />
                                        <label htmlFor="name" className="text-gray-700">Username</label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">

                                        <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="Email Address" value={order?.email} disabled readOnly />
                                        <label htmlFor="email" className="text-gray-700">Email Address</label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">
                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="contact" placeholder="Contact Number" value={order?.contact} disabled readOnly />

                                        <label htmlFor="contact" className="text-gray-700">Contact Number</label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">
                                        <textarea className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="3" id="address" placeholder="Address" value={order?.address} disabled readOnly />

                                        <label htmlFor="address" className="text-gray-700">Address </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='w-full'>
                            <div>
                                <h3 className="leading-tight text-xl font-bold py-3"> Payment Details</h3>
                                <div className="flex justify-center">
                                    <div className='rounded-lg bg-white shadow-lg  border-2'>
                                        <div className="flex flex-col md:flex-row md:max-w-xl  justify-center items-center">
                                            <img className=" h-1/3 w-1/3 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg px-3" src={order?.part_image} alt="" />
                                            <div className="p-6 flex flex-col justify-start">
                                                <h5 className="text-gray-900 text-lg font-bold mb-2 text-left">{order?.part_name}</h5>
                                                <div className='flex items-center justify-between space-x-3'>
                                                    <h5 className="md:text-lg font-bold mb-2 text-left"> Quantity:  <span className='md:text-lg font-semibold'>{order?.order_quantity}</span></h5>
                                                    <h5 className="md:text-md font-bold mb-2 text-right">Total Price:  <span className='md:text-lg font-semibold'>${order?.total_price}</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-6 py-10 flex flex-col justify-start">
                                            <Elements stripe={stripePromise}>
                                                <CheckoutForm order={order}></CheckoutForm>
                                            </Elements>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;