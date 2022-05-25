import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Feature = ({title,body,icon}) => {
    return (
        <div class="flex justify-start my-8">
        <div class=" max-w-md w-auto text-white grid grid-cols-3 justify-center items-center pr-3">
            <div className='col-span-1'>
                <FontAwesomeIcon icon={icon} className='text-3xl'></FontAwesomeIcon>
            </div>
            <div class="col-span-2">
                <h5 class="text-xl font-extrabold text-left">
                {title}
                </h5>
                <p class="text-medium font-medium mb-4 font-headings text-left">
                    {body}
                </p>
            </div>
        </div>

    </div>
    );
};

export default Feature;