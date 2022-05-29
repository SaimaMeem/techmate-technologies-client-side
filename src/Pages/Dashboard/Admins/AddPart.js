import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import PageTitle from '../../../shared/PageTitle';
const AddPart = () => {
    // console.log(users);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        console.log(data);
        const partDetails = {
            name: data.name,
            price: data.price,
            min_quantity: data.min_quantity,
            available_quantity: data.available_quantity,
            image: data.image,
            description: data.description,
            
        }
        console.log(partDetails);
        // POST
        fetch(`http://localhost:5000/parts/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(partDetails),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('A part has been added')
                    reset();
                }

                else {
                    toast.error('The new part addition is failed!')
                }
            })
    };
    return (
        <div>
            <PageTitle title={'Dashboard - Add New Part'}></PageTitle>
            <div className='pt-1 pb-24'>
                <h3 className="leading-tight text-2xl font-bold mb-2">  Add New Part</h3>
                <div className="flex flex-col p-6 py-10 rounded-lg shadow-lg  bg-white w-full h-full justify-center mx-auto">
                    {/* <div className="flex w-full border-opacity-100"> */}
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


                            <div className=''>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">

                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="Part Name"   {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Part Name is required'
                                            }
                                        }
                                        )} />

                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        <label htmlFor="available_quantity" className="text-gray-700">Part Name</label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">
                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="min_quantity" placeholder="Available Quantity"
                                            {...register("min_quantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Available Quantity is required'
                                                }
                                            }
                                            )}
                                        />
                                        {errors.min_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.min_quantity.message}</span>}
                                        <label htmlFor="min_quantity" className="text-gray-700">Available Quantity</label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">

                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="image" placeholder="Part Image"   {...register("image", {
                                            required: {
                                                value: true,
                                                message: 'Part Image is required'
                                            }
                                        }
                                        )} />

                                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                        <label htmlFor="available_quantity" className="text-gray-700">Part Image</label>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className=''>

                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">

                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="price" placeholder="Price" {...register("price", {
                                            required: {
                                                value: true,
                                                message: 'Price is required'
                                            }
                                        }
                                        )} />

                                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                        <label htmlFor="price" className="text-gray-700">Price</label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">
                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="available_quantity" placeholder="Minimum Quantity"
                                            {...register("available_quantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Minimum Quantity is required'
                                                }
                                            }
                                            )}
                                        />
                                        {errors.available_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available_quantity.message}</span>}
                                        <label htmlFor="available_quantity" className="text-gray-700">Minimum Quantity</label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <div className="form-floating w-full">
                                        <textarea className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="3" id="description" placeholder="Description"
                                            {...register("description", {
                                                required: {
                                                    value: true,
                                                    message: 'Description is required'
                                                }
                                            }
                                            )}

                                        />
                                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                        <label htmlFor="description" className="text-gray-700">Description </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button type="submit" data-mdb-ripple="true"
                            data-mdb-ripple-color="light" className="ml-auto mt-4 lg:mt-0 inline-block px-8 py-2.5 bg-pastel-green text-white font-bold text-sm leading-tight rounded shadow-md hover:bg-pastel-green-dark hover:shadow-lg focus:bg-pastel-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pastel-green-darker active:shadow-lg transition duration-150 ease-in-out disabled:bg-slate-600"> <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>&nbsp;&nbsp; Save </button>
                    </form>
                    {/* </div> */}
                </div>

            </div>
        </div>
    );
};

export default AddPart;