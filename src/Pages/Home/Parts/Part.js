import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, price, available_quantity, image, description, min_quantity } = part;
    // const descriptionList = description.split('\\r\\n');
    // console.log(descriptionList);
    const navigate = useNavigate();
    const navigateToPurchase = (id) => {
        navigate(`/parts/purchase/${id}`)
    }
    return (
        <div>
            <div className="flex justify-center py-4">
                <div className="rounded-lg shadow-lg bg-white max-w-sm border-2">
                    <div className='grid grid-cols-2 px-3 pt-5'>
                        <img className="rounded-lg h-40 w-40 object-cover hover:scale-110 transition duration-300 ease-in-out" src={image} alt="" />
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                        <div className='text-left pl-3 lg:h-52 xl:h-auto flex flex-col justify-center items-center'>
                            <div className=''>
                                <h5 className="text-black text-xl font-bold mb-1 text-left">
                                {name}                                
                                </h5>
                                <h5 className="text-black text-lg font-bold mb-2">Price: <span className='text-base'>${price}</span> <span className='text-xs font-semibold text-gray-800'>&nbsp; per unit</span></h5>
                            </div>

                        </div>
                    </div>
                    <div className="px-6 pb-6 pt-1">


                        <p className="text-black text-base mb-4 text-left font-medium h-40 lg:h-48 xl:h-40">
                            {(description.length > 290) ? description.substr(0, 268 - 1) + '...' : description}
                            {/* {descriptionList.map((d, ind) => <li className='px-6' key={ind}>{d}</li>)} */}
                        </p>
                        <h5 className="text-black text-base font-bold">Available Quantity: <span className='text-base font-medium'> {available_quantity}</span></h5>
                        <h5 className="text-black text-base font-bold mb-2">Minimum Quantity to Order:<span className='text-base font-medium'> {min_quantity}</span></h5>
                        <button onClick={() => { navigateToPurchase(_id) }} type="button" data-mdb-ripple="true"
                            data-mdb-ripple-color="light" className=" inline-block px-6 py-2.5 bg-medium-yellow text-white font-bold text-sm leading-tight uppercase rounded shadow-md hover:bg-dark-yellow hover:shadow-lg focus:bg-dark-yellow focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darker-yellow  active:shadow-lg transition duration-150 ease-in-out">Purchase Now&nbsp;  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Part;