import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import useParts from '../../../hooks/useParts';


import Part from './Part';

const Parts = () => {
    const [parts] = useParts();

    return (
        <section className='my-14' id='available-parts'>
            <h3 className="leading-tight text-4xl font-bold my-10 font-headings">Computer Parts</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    parts.slice(0, 6).map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
            <div className='my-5'>

                <Link to='/parts' type="button" data-mdb-ripple="true"
                    data-mdb-ripple-color="light" className=" inline-block px-10 py-4 bg-pastel-green-dark text-white font-bold text-md leading-tight uppercase rounded shadow-md hover:bg-pastel-green-darker hover:shadow-lg focus:bg-pastel-green-darker focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pastel-green-darkest active:shadow-lg transition duration-150 ease-in-out">See All&nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
            </div>
        </section>
    );
};

export default Parts;