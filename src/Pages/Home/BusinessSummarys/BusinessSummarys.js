import { faScrewdriverWrench, faThumbsUp, faTruckField, faUsers } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import SingleBusinessSummary from './BusinessSummary';
const BusinessSummary = () => {
    return (
        <div className='mt-5' id='business-summary'>
            <h3 className="leading-tight text-4xl font-bold my-10 font-headings">Our Growth</h3>
            <section className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 my-10 gap-3 mx-16'>
                <SingleBusinessSummary heading={'Clients'} icon={faUsers} number={1000}></SingleBusinessSummary>
                <SingleBusinessSummary heading={'Deliveries'} icon={faTruckField} number={2500}></SingleBusinessSummary>
                <SingleBusinessSummary heading={'Parts'} icon={faScrewdriverWrench} number={700}></SingleBusinessSummary>
                <SingleBusinessSummary heading={'Reviews'} icon={faThumbsUp} number={500}></SingleBusinessSummary>
            </section>
        </div>
    );
};

export default BusinessSummary;