import { faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../../shared/PageTitle';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { partId } = useParams();
    const [partDetails, setPartDetails] = useState([]);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/parts/purchase/${partId}`)
            .then(res => res.json())
            .then(data => setPartDetails(data))
    }, [partDetails, partId]);
    const { _id, name, price, available_quantity, min_quantity, image, description } = partDetails;
    const [updateQuantity, setUpdateQuantity] = useState(0);
    const [updatePrice, setUpdatePrice] = useState(0);
    const availableQuantity = parseInt(available_quantity);
    const minQuantity = parseInt(min_quantity);
    const convertedPrice = parseFloat(price);
    const initialPriceForMinQuantity = (minQuantity * convertedPrice).toFixed(2);
    useEffect(() => {
        setUpdateQuantity(min_quantity);
    }, [min_quantity]);
    useEffect(() => {
        setUpdatePrice(initialPriceForMinQuantity);
    }, [initialPriceForMinQuantity]);
    const decreaseQuantity = () => {
        let newQuantity = parseInt(updateQuantity) - 1;
        if (newQuantity < minQuantity) {
            if (newQuantity > 0) {
                setUpdateQuantity(newQuantity);
            }
            setCheck(!check);
            setTimeout(function () {
                setCheck(check);
                toast.error(`You can't order less than ${minQuantity} unit!`)
                setUpdateQuantity(minQuantity);
            }, 500);
        }
        else {
            let newPrice = (newQuantity * parseFloat(price)).toFixed(2);
            setUpdateQuantity(newQuantity);
            setUpdatePrice(newPrice);
            setCheck(check);
        }
    }
    const [check, setCheck] = useState(false);
    const increaseQuantity = () => {
        let newQuantity = parseInt(updateQuantity) + 1;
        if (newQuantity > parseInt(availableQuantity)) {
            setUpdateQuantity(newQuantity);
            console.log(newQuantity, availableQuantity);
            setCheck(!check);
            setTimeout(function () {
                toast.error(`You can't order more than ${availableQuantity} unit!`)
                setUpdateQuantity(availableQuantity);
                setCheck(check);
            }, 500);
        }
        else {
            let newPrice = (newQuantity * parseFloat(price)).toFixed(2);
            setUpdateQuantity(newQuantity);
            setUpdatePrice(newPrice);
            setCheck(check);
        }
    }
    const handleChangeQuantity = (event) => {
        console.log(event.target.value);

        setUpdateQuantity(parseInt(event.target.value));
        setUpdatePrice((parseInt(event.target.value) * parseFloat(price)).toFixed(2));
        setCheck(check);
        if (event.target.value > availableQuantity) {
            setCheck(!check);
            setTimeout(function () {
                toast.error(`You can't order more than ${availableQuantity} unit!`)
                setUpdateQuantity(availableQuantity);
                setCheck(check);
            }, 500);
        }
        if (event.target.value < minQuantity) {
            setCheck(!check);
            setTimeout(function () {
                toast.error(`You can't order less than ${minQuantity} unit!`)
                setUpdateQuantity(minQuantity);
                setCheck(check);
            }, 500);
        }


    }

    //ONSUBMIT
    const onSubmit = async data => {
        console.log(data);
        const quantity = document.getElementById('quantity').value;
        const total = document.getElementById('total').value;
        const updatedQuantity = parseInt(available_quantity) - parseInt(quantity);

        const updatedPart = { available_quantity: updatedQuantity.toString() };
        const order = {
            username: user.displayName,
            email: user.email,
            contact: data.contact,
            address: data.address,
            part_id: _id,
            part_name: name,
            part_image: image,
            order_quantity: quantity,
            total_price: total,
        }
        //PUT
        fetch(`http://localhost:5000/parts/purchase/${partId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPart),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        //POST
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Your Order is submitted')
                    setUpdateQuantity(min_quantity);
                    setUpdatePrice(initialPriceForMinQuantity);
                    reset();
                }
                else {
                    toast.error('Your Order submission is failed!')
                }
            })


    };
    return (
        <section className='py-36 text-black'>
            <PageTitle title={`Purchase`}></PageTitle>

            <div className="grid grid-cols-1 justify-center xl:grid-cols-8 xl:ml-10">
                <div className="flex flex-col md:flex-row  justify-center mx-auto bg-white sm:px-6 md:px-16 lg:px-0 w-full col-span-5">
                    <img className="flex-none w-auto h-auto sm:h-72 sm:self-center md:w-72 lg:w-auto object-cover rounded-lg md:rounded-none md:rounded-l-lg md:shadow-lg mx-auto" src={image} alt="" />
                    <div className="p-6 flex flex-col justify-start text-left">
                        <h5 className="text-xl md:text-3xl font-bold mb-2">{name}</h5>
                        <h5 className="md:text-2xl font-bold mb-2">Price:  <span className='md:text-xl font-semibold'>${price}</span> <span className='text-xs md:text-sm font-medium text-gray-900'>&nbsp; per unit</span></h5>
                        <div className='flex flex-col md:flex-row md:items-center'>
                            <h5 className="md:text-lg font-bold mb-2">Available Quantity:  <span className='md:text-lg font-semibold'>{available_quantity}</span></h5>
                            <div className='w-1 h-4/5 lg:h-3/5  mx-3 bg-black hidden md:block'>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; </div>
                            <h5 className="md:text-lg font-bold mb-2">Minimum Quantity to Order:  <span className='md:text-lg font-semibold'>{min_quantity}</span></h5>
                        </div>

                        <p className="text-base font-medium mb-4">
                            {description}
                        </p>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>



                        </div>
                    </div>
                </div>
                {/* user info form */}

                <div className="flex flex-col p-6 lg:rounded-none lg:shadow-none rounded-lg shadow-lg xl:rounded-lg xl:shadow-lg bg-white w-full md:w-5/6 lg:w-2/3 h-full col-span-3 justify-center mx-auto">
                    <h3 className="leading-tight text-2xl font-bold mb-10 font-headings">User Information </h3>
                    <div className="flex flex-col w-full border-opacity-50">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-6">
                                <div className="form-floating w-full">

                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="Username" value={user.displayName} disabled readOnly />
                                    <label htmlFor="name" className="text-gray-700">Username</label>
                                </div>
                            </div>
                            <div className="form-group mb-6">
                                <div className="form-floating w-full">

                                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="Email Address" value={user.email} disabled readOnly />
                                    <label htmlFor="email" className="text-gray-700">Email Address</label>
                                </div>
                            </div>
                            <div className="form-group mb-6">
                                <div className="form-floating w-full">
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="contact" placeholder="Contact Number" {...register("contact", {
                                        required: {
                                            value: true,
                                            message: 'Contact Number is required'
                                        }
                                    }
                                    )} />
                                    {errors.contact?.type === 'required' && <span className="label-text-alt text-red-500">{errors.contact.message}</span>}
                                    <label htmlFor="contact" className="text-gray-700">Contact Number</label>
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
                            <div className="form-group mb-6">
                                <div className="custom-number-input h-10 flex justify-start md:justify-between items-center">
                                    <label htmlFor="custom-input-number" className="w-auto md:w-full  text-md font-semibold  inline-block pr-3 text-left">Order Quantity
                                    </label>
                                    <div className="flex flex-row h-10 w-32 md:w-full rounded-lg relative bg-transparent mt-1">
                                        <button type='button' onClick={() => { decreaseQuantity() }} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                            <span className="m-auto text-2xl font-thin">−</span>
                                        </button>
                                        <input type="text" id="quantity" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-base cursor-default flex items-center text-gray-700" name="custom-input-number" value={updateQuantity || 0} onChange={handleChangeQuantity}></input>

                                        <button type='button' onClick={() => { increaseQuantity() }} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                            <span className="m-auto text-2xl font-thin">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-6">
                                <h5 className="flex items-center  text-md font-semibold mb-2 text-right">Total: <span className=' text-2xl font-bold text-dark-sky-blue'> &nbsp;$</span> <input type="text" className="form-control  py-1.5 text-2xl w-auto font-bold bg-white text-dark-sky-blue focus:outline-none focus:border-none cursor-default active:border-none" id="total" value={updatePrice || 0} readOnly></input> </h5>
                            </div>
                            <button type="submit" data-mdb-ripple="true"
                                data-mdb-ripple-color="light" className="ml-auto mt-4 lg:mt-0 inline-block px-8 py-2.5 bg-pastel-green text-white font-bold text-sm leading-tight rounded shadow-md hover:bg-pastel-green-dark hover:shadow-lg focus:bg-pastel-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pastel-green-darker active:shadow-lg transition duration-150 ease-in-out disabled:bg-slate-600" disabled={check}> Place Order &nbsp;&nbsp;<FontAwesomeIcon icon={faSave}></FontAwesomeIcon></button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Purchase;