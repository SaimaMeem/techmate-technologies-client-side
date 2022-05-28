
import React, { useEffect, useState } from 'react';
import PageTitle from '../../../shared/PageTitle';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmationModal from '../../../shared/DeleteConfirmationModal';

const MyOrders = () => {
    const [parts, setParts] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const navigate = useNavigate();
    const navigateToPurchase = (id) => {
        navigate(`/parts/purchase/${id}`)
    }
    console.log(email);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setParts(data)
                console.log(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [parts, email]);
    let count = 1;
    const [orderId, setOrderId] = useState(null);
    const [partName, setPartName] = useState(null);
    const displayModal = (id, name) => {
        setOrderId(id);
        setPartName(name);

    }
    const submitDelete = (orderId, partName) => {
        console.log("clicked", partName);

        toast.success(`Order of ${partName} is deleted from your orders!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const url = `http://localhost:5000/orders/${orderId}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log("deletion successful");
                    const rest = parts.filter(part => part._id !== orderId);
                    setParts(rest);
                }
            })
    };
    return (
        <section>
            <PageTitle title={'My Orders'}></PageTitle>
            <div className='pt-36 pb-24'>
                <h3 className="leading-tight text-3xl font-bold">  My Orders</h3>
                <div className="flex flex-col mt-5">
                    <div className="overflow-x-auto sm:mx-6 lg:mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-darker-yellow text-white font-semibold">
                                        <tr className='border'>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                SI No.
                                            </th>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                Part
                                            </th>
                                            <th scope="col" className="text-sm py-4 px-2 border-r">
                                                Ordered Quantity
                                            </th>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                Total Price
                                            </th>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                Action
                                            </th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {parts.length ?

                                            parts.map(part =>
                                                <tr key={part._id} className="bg-white  transition duration-300 ease-in-out hover:bg-gray-100 border">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">{count++}</td>
                                                    <td className="text-sm font-medium px-3 py-4 whitespace-nowrap border-r flex items-center justify-center gap-2 cursor-pointer" type='button' onClick={() => { navigateToPurchase(part.part_id) }}>
                                                        <img className="rounded-lg h-12 w-12 object-cover hidden md:block" src={part.part_image} alt="" />  {part.part_name}
                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        {part.order_quantity}

                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        ${part.total_price}
                                                    </td>
                                                    <td className="text-lg font-medium px-6 py-4 whitespace-nowrap border-r text-redd">
                                                        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" type='' onClick={() => { displayModal(part._id, part.part_name) }} ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                                    </td>

                                                </tr>
                                            ) : <tr>
                                                <td colSpan="6" className='py-5 font-bold' >You have no orders!</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteConfirmationModal orderId={orderId} partName={partName} confirmModal={submitDelete} />
        </section>
    );
};

export default MyOrders;