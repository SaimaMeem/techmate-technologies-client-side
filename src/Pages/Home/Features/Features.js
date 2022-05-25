import { faBagShopping, faPlaneDeparture, faSackDollar, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Feature from './Feature';

const Features = () => {
    return (
        <div className='mt-5' id='features'>
            <h3 className="leading-tight text-4xl font-bold my-10 font-headings">Features</h3>
            <section className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 py-6 gap-3 bg-lighter-red justify-center items-center'>
                <Feature title={'Free Shipping'} icon={faPlaneDeparture} body={'Design on Order Over $99'}></Feature>
                <Feature title={'Order Online'} icon={faBagShopping} body={'Easy 24/7 Online Ordering'}></Feature>
                <Feature title={'Safe & Secure'} icon={faShieldAlt} body={'We provide 100% Secure Services '}></Feature>
                <Feature title={'Shop & Save'} icon={faSackDollar} body={'For all Special Collections'}></Feature>

            </section>
        </div>
    );
};

export default Features;