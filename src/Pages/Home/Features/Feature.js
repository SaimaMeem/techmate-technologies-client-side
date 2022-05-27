import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Feature = ({ title, body, icon }) => {
    return (
        <div className="flex justify-start my-8">
            <div className=" max-w-md w-auto text-white grid grid-cols-3 justify-center items-center pr-3">
                <div className='col-span-1'>
                    <FontAwesomeIcon icon={icon} className='text-3xl'></FontAwesomeIcon>
                </div>
                <div className="col-span-2">
                    <h5 className="text-xl font-extrabold text-left">
                        {title}
                    </h5>
                    <p className="text-medium font-medium mb-4 font-headings text-left">
                        {body}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Feature;