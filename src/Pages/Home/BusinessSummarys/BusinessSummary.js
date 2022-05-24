import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
const SingleBusinessSummary = ({heading,icon,number}) => {
    return (
        <div class="flex justify-center my-5">
            <div class="rounded-lg shadow-xl bg-gradient-to-b from-dark-sky-blue to-sky-blue max-w-sm pt-10 w-64 text-white">
                <div>
                    <FontAwesomeIcon icon={icon} className='text-5xl'></FontAwesomeIcon>
                </div>
                <div class="px-3 py-5">
                    <h5 class="text-5xl font-extrabold">
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <div className='pb-3'>
                                    {isVisible ? <p><CountUp end={number} /><span className='pl-1'>+</span></p> : 0}
                                </div>
                            )}
                        </VisibilitySensor>
                    </h5>
                    <p class="text-3xl font-medium mb-4 font-headings text-center">
                        {heading}
                    </p>
                </div>
            </div>

        </div>



    );
};

export default SingleBusinessSummary;