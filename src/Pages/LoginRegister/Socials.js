import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
// import useToken from '../../../hooks/useToken';
import google from '../../images/google-logo.png';
const Socials = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken(googleUser || facebookUser);
    let divElement;
    let from = location?.state?.from?.pathname || "/";
    if (googleError || facebookError) {
        divElement = <p className='text-red-600 font-semibold'>Error: {googleError?.message} {facebookError?.message}</p>;
    }
    if (googleLoading || facebookLoading) {
        divElement = <div className=" spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-spinner-color font-bold
        " role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            // console.log(googleUser || facebookUser);
        }

    }, [from,token,facebookUser,googleUser,navigate]);

    return (
        <div className='flex  justify-center '>
            <div className='grid grid-cols-1 max-w-xs justify-center items-center'>
                <div className='mb-5'>
                    {divElement}
                </div>
                <button type="submit" data-mdb-ripple="true"
                    data-mdb-ripple-color="light" className="border-4 border-black inline-block px-6 lg:px-8 py-2 my-2 bg-white text-black font-bold text-md leading-tight uppercase rounded shadow-md hover:bg-gray-200 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200  active:shadow-lg transition duration-150 ease-in-out" onClick={() => signInWithGoogle()}><img className='inline-block google-icon mx-2 w-6 ' src={google} alt='' /> Continue with Google</button>
                <button type="submit" data-mdb-ripple="true"
                    data-mdb-ripple-color="light" className="border-4 border-blue-600 inline-block px-8 py-3 my-2 bg-blue-600 text-white font-semibold text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800   active:shadow-lg transition duration-150 ease-in-out" onClick={() => signInWithFacebook()}> <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> &nbsp;&nbsp;Continue with Facebook</button>
            </div>

        </div>
    );
};

export default Socials;