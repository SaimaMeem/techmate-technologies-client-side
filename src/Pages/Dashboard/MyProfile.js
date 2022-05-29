import { faGears } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useUsers from '../../hooks/useUsers';
import PageTitle from '../../shared/PageTitle';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [users] = useUsers(email);
    // console.log(users);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        console.log(data);
        const userDetails = {
            username:user?.displayName,
            address: data?.address || users?.address,
            contact: data?.contact || users?.contact,
        }
        console.log(userDetails);
        //POST
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userDetails),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.result.modifiedCount || data.result.upsertedCount) {
                    toast.success('Your Profile is updated')
                    reset();
                }

                else {
                    toast.error('Your Profile update is failed!')
                }
            })
    };
    return (
        <div>
            <PageTitle title={'Dashboard - My Profile'}></PageTitle>
            <div className='pt-1 pb-24'>
                <h3 className="leading-tight text-2xl font-bold mb-2">  My Profile</h3>
                <div className="flex flex-col p-6 py-10 rounded-lg shadow-lg  bg-white w-full h-full justify-center mx-auto">
                    {/* <div className="flex w-full border-opacity-100"> */}
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


                            <div className=''>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">

                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="Username" value={user?.displayName} disabled readOnly />
                                        <label htmlFor="name" className="text-gray-700">Username</label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">
                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="contact" placeholder="Contact Number" value={users?.contact}
                                            {...register("contact", {
                                                required: {
                                                    value: true,
                                                    message: 'Contact Number is required'
                                                }
                                            }
                                            )}
                                        />
                                        {errors.contact?.type === 'required' && <span className="label-text-alt text-red-500">{errors.contact.message}</span>}
                                        <label htmlFor="contact" className="text-gray-700">Contact Number</label>
                                    </div>
                                </div>

                                <div>

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
                                        <textarea className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="3" id="address" placeholder="Address" value={users?.address}
                                            {...register("address", {
                                                required: {
                                                    value: true,
                                                    message: 'Address is required'
                                                }
                                            }
                                            )}

                                        />
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                        <label htmlFor="address" className="text-gray-700">Address </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button type="submit" data-mdb-ripple="true"
                            data-mdb-ripple-color="light" className="ml-auto mt-4 lg:mt-0 inline-block px-8 py-2.5 bg-pastel-green text-white font-bold text-sm leading-tight rounded shadow-md hover:bg-pastel-green-dark hover:shadow-lg focus:bg-pastel-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pastel-green-darker active:shadow-lg transition duration-150 ease-in-out disabled:bg-slate-600"> <FontAwesomeIcon icon={faGears}></FontAwesomeIcon>&nbsp;&nbsp; Update </button>
                    </form>
                    {/* </div> */}
                </div>

            </div>
        </div>
    );
};

export default MyProfile;