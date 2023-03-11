import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useParts from '../../../hooks/useParts';
import Loader from '../../../shared/Loader';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1200);
    }, []);
    return (
        <section className='my-14' id='available-parts'>
            <h3 className="leading-tight text-4xl font-bold my-10 font-headings">Computer Parts</h3>
            {loading ? <Loader /> :
                parts.length ?
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                parts.slice(0, 6).map(part => <Part key={part._id} part={part}></Part>)
                            }
                        </div>
                        <div className='my-5'>

                            <Link to='/parts' type="button" data-mdb-ripple="true"
                                data-mdb-ripple-color="light" className=" inline-block px-10 py-4 bg-pastel-green-dark text-white font-bold text-md leading-tight uppercase rounded shadow-md hover:bg-pastel-green-darker hover:shadow-lg focus:bg-pastel-green-darker focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pastel-green-darkest active:shadow-lg transition duration-150 ease-in-out">See All&nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
                        </div>
                    </> : <div className='text-center font-bold pt-4'>No Parts are available at this moment. Please try again later.</div>}
        </section>
    );
};

export default Parts;