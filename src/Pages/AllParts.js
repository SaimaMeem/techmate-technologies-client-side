
import React from 'react';
import PageTitle from '../shared/PageTitle';
import { useNavigate } from 'react-router-dom';

import useParts from '../hooks/useParts';
import { useState,useEffect } from 'react';
import Loader from '../shared/Loader';
const AllParts = () => {
    const [parts, setParts] = useParts();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const navigateToPurchase = (id) => {
        navigate(`/parts/purchase/${id}`)
    }
    let count = 1;
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1200);
    }, [])
    return (
        <section>
            <PageTitle title={'Dashboard - All Parts'}></PageTitle>
            <div className='pt-36 pb-24'>
                <h3 className="leading-tight text-3xl font-bold mb-2">  All Parts</h3>
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

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? <tr><td colSpan="6" className='py-5 font-bold' ><Loader /></td></tr> :
                                        parts.length ?
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
        </section>
    );
};

export default AllParts;