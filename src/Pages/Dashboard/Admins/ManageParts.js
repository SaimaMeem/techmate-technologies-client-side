
import React, { useEffect, useState } from 'react';
import PageTitle from '../../../shared/PageTitle';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmationModal from '../../../shared/DeleteConfirmationModal';
import useParts from '../../../hooks/useParts';
const ManageOrders = () => {
    const [show, setShow] = useState(false);
    const [parts, setParts] = useParts();
    const navigate = useNavigate();
    const navigateToPurchase = (id) => {
        navigate(`/parts/purchase/${id}`)
    }
    let count = 1;
    const [partId, setPartId] = useState(null);
    const [partName, setPartName] = useState(null);
    const displayModal = (id, name) => {
        setPartId(id);
        setPartName(name);

    }
    const submitDelete = (partId, partName) => {
        toast.success(`${partName} is deleted from the stock!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const url = `https://murmuring-fortress-11429.herokuapp.com/parts/${partId}`;
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
                    const rest = parts.filter(part => part._id !== partId);
                    setParts(rest);
                }
            })
    };

    return (
        <section>
            <PageTitle title={'Dashboard - Manage Parts'}></PageTitle>
            <div className='pt-1 pb-24'>
                <h3 className="leading-tight text-2xl font-bold mb-2">  Manage Parts</h3>
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
                                                Minimum Quantity
                                            </th>
                                            <th scope="col" className="text-sm py-4 px-2 border-r">
                                                Available Quantity
                                            </th>
                                            <th scope="col" className="text-sm py-4 px-2 border-r">
                                                Price
                                            </th>
                                            <th scope="col" className="text-sm py-4 px-2  border-r">
                                                Action
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {parts.length ?

                                            parts.map(part =>
                                                <tr key={part._id} className="bg-white  transition duration-300 ease-in-out hover:bg-gray-100 border">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">{count++}</td>
                                                    <td className="text-sm font-medium px-3 py-4 whitespace-nowrap border-r flex items-center justify-center gap-2 cursor-pointer" type='button' onClick={() => { navigateToPurchase(part._id) }}>
                                                        <img className="rounded-lg h-12 w-12 object-cover hidden md:block" src={part.image} alt="" />  {part.name}
                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        {part.min_quantity} Unit

                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        {part.available_quantity} Unit

                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        ${part.price}
                                                    </td>
                                                    <td className="text-lg font-medium px-6 py-2 whitespace-nowrap border-r">
                                                        <button className='text-redd ' data-bs-toggle="modal"
                                                            data-bs-target="#staticBackdrop" onClick={() => { displayModal(part._id, part.name) }}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>

                                                    </td>
                                                </tr>
                                            ) : <tr>
                                            <td colSpan="6" className='py-5 font-bold' >No parts are available!</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteConfirmationModal orderId={partId} partName={partName} confirmModal={submitDelete} />
        </section>
    );
};

export default ManageOrders;