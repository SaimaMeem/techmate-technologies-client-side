
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    // const { _id, name, price, quantity, image, description, supplier_name } = part;
    const navigate = useNavigate();
    const navigateToUpdateStock = (id) => {
        navigate(`/fruits&vegetables/${id}`)
    }
    return (
        <div>
            <div className="flex justify-center py-4">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <div className='grid grid-cols-2 px-3 pt-5'>
                        <img className="rounded-lg h-40 w-40 object-cover hover:scale-110 transition duration-300 ease-in-out" src='' alt="" />
                        <div className='text-left pl-3 lg:h-52 xl:h-auto'>
                            <h5 className="text-black text-xl font-bold mb-1 text-center">saima</h5>
                            <h5 className="text-black text-lg font-bold mb-2">Price: <span className='text-base'>$45</span> <span className='text-xs font-semibold text-gray-800'>&nbsp; per piece</span></h5>
                            <h5 className="text-black text-base font-bold mb-2">Quantity: <span className='text-base font-medium'> 25</span></h5>

                            <h5 className="text-black text-base font-bold mb-2"> Supplier:<span className='text-sm font-semibold'>Sultaba</span></h5>
                        </div>
                    </div>
                    <div className="px-6 pb-6 pt-1">
                        <p className="text-black text-base mb-4 text-left font-medium h-40 lg:h-48 xl:h-40">
                            {/* {description} */}
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quo natus atque repudiandae exercitationem alias saepe nam sequi nesciunt harum distinctio sapiente corporis, ipsa soluta id! Provident atque aperiam iste.
                        </p>
                        <button type="button" data-mdb-ripple="true"
                            data-mdb-ripple-color="light" className=" inline-block px-6 py-2.5 bg-pastel-green text-white font-bold text-sm leading-tight uppercase rounded shadow-md hover:bg-pastel-green-dark hover:shadow-lg focus:bg-pastel-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pastel-green-darker  active:shadow-lg transition duration-150 ease-in-out">Update Stock&nbsp; </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Part;