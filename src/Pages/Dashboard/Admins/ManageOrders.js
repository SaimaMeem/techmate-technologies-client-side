
import React, { useEffect, useState } from 'react';
import PageTitle from '../../../shared/PageTitle';
import { faCreditCard, faReceipt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmationModal from '../../../shared/DeleteConfirmationModal';

const ManageOrders = () => {
    const [show, setShow] = useState(false);
    const [orders, setOrders] = useState([]);
   
    useEffect(() => {
        fetch(`http://localhost:5000/allorders`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [orders]);
    const navigate = useNavigate();
    const navigateToPurchase = (id) => {
        navigate(`/parts/purchase/${id}`)
    }
    // const navigateToPay = (id) => {
    //     navigate(`/payment/${id}`)
    // }

    // console.log(email);
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
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log("deletion successful");
                    const rest = orders.filter(order => order._id !== orderId);
                    setOrders(rest);
                }
            })
    };

    return (
        <section>
            <PageTitle title={'Dashboard - Manage Orders'}></PageTitle>
            <div className='pt-1 pb-24'>
                <h3 className="leading-tight text-2xl font-bold mb-2">  Manage Orders</h3>
                <div className="flex flex-col justify-center">
                    <div className="overflow-x-auto sm:mx-6 lg:mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden  rounded-lg shadow-lg">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-gray-800 text-white font-semibold">
                                        <tr className='border'>
                                            <th scope="col" className="text-sm py-4 px-2  border-r">
                                                SI No.
                                            </th>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                Part
                                            </th>
                                            <th scope="col" className="text-sm py-4 px-2 border-r">
                                                Ordered Quantity
                                            </th>
                                            <th scope="col" className="text-sm py-4 px-2 border-r">
                                                Total Price
                                            </th>
                                            <th scope="col" className="text-sm py-4 px-2  border-r">
                                                Action
                                            </th>
                                            {/* <th scope="col" className="text-sm py-4 px-2  border-r">
                                                Status
                                            </th> */}


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.length ?

                                            orders.map(order =>
                                                <tr key={order._id} className="bg-white  transition duration-300 ease-in-out hover:bg-gray-100 border">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">{count++}</td>
                                                    <td className="text-sm font-medium px-3 py-4 whitespace-nowrap border-r flex items-center justify-center gap-2 cursor-pointer" type='button' onClick={() => { navigateToPurchase(order.part_id) }}>
                                                        <img className="rounded-lg h-12 w-12 object-cover hidden md:block" src={order.part_image} alt="" />  {order.part_name}
                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        {order.order_quantity} Unit

                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        ${order.total_price}
                                                    </td>
                                                    <td className="text-lg font-medium px-6 py-2 whitespace-nowrap border-r">
                                                        <button className='text-redd disabled:text-gray-400 disabled:cursor-not-allowed' data-bs-toggle={order?.paid ? 'collapse' : "modal"}
                                                            data-bs-target="#staticBackdrop" type='' onClick={() => { displayModal(order._id, order.part_name) }} disabled={order.paid}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>

                                                    </td>
                                                    {/* <td className="text-lg font-medium px-6 py-2 whitespace-nowrap border-r">
                                                        {(order?.order_quantity && !order?.paid) &&
                                                            <button className='text-darker-sky-blue' onClick={() => {  }} ><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon></button>}
                                                        {(order?.order_quantity && order?.paid) && <div>
                                                            <button onClick={() => { setShow(!show) }} className='text-pastel-green-dark  transition duration-150 ease-in-out'  ><FontAwesomeIcon icon={faReceipt}></FontAwesomeIcon></button>
                                                            {show && <p className='text-pastel-green-dark font-bold text-sm  transition duration-150 ease-in-out '><span>Transaction Id:</span>{order?.transactionId}</p>}
                                                        </div>}

                                                    </td> */}

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

export default ManageOrders;