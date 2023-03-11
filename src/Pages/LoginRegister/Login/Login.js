import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import React from 'react';
import '../Login/Login.css'
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../../images/login.jpg';
import { toast } from 'react-toastify';
// import useToken from '../../../hooks/useToken';
import PageTitle from '../../../shared/PageTitle';
import Socials from '../Socials';
import { useForm } from 'react-hook-form';
import useToken from '../../../hooks/useToken';
const Login = () => {
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(emailUser);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        signInWithEmailAndPassword(data.email, data.password);

    };
    let divElement;
    if (emailUser) { //token
        navigate(from, { replace: true });
    }
    if (emailError) {
        divElement = <p className='text-red-600 font-semibold'>Error: {emailError?.message}</p>;
    }
    if (emailLoading) {
        divElement = <div className=" spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-spinner-color font-bold
" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    const resetPassword = async () => {
        const email = document.getElementById('email').value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            toast.error("Please enter your email address!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <section className='pt-36 pb-28 font-medium'>
            <PageTitle title={'Login'}></PageTitle>
            <h3 className="leading-tight text-3xl font-bold text-dark-blue pb-5"> Login</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2  justify-center w-auto rounded-lg shadow-lg md:mx-20 items-center md:px-10'>
                <div className='w-10/12'>
                    <img className='max-w-xs h-auto mx-auto object-cover' src={loginImage} alt="" />
                </div>
                <div className="py-6  bg-white w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating m-3 w-auto">
                            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="Email Address"  {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email address is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Please provide valid email address"
                                }
                            }
                            )} />

                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-semibold">{errors.email.message}</span>}
                            <label htmlFor="email" className="text-gray-700">Email Address</label>
                        </div>
                        <div className="form-group mb-6">
                            <div className="form-floating m-3 w-auto">
                                <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password" aria-describedby="password" placeholder="Enter Password" {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must have at least 6 characters"
                                    }
                                }
                                )} />

                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 font-semibold">{errors.password.message}</span>}
                                <label htmlFor="password" className="text-gray-700">Password</label>
                            </div>

                        </div>
                        <div className='mb-3'>
                            {divElement}
                        </div>

                        <button type="submit" data-mdb-ripple="true"
                            data-mdb-ripple-color="light" className="w-1/2 px-4 py-3 bg-blue-600 text-white font-semibold text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign in</button>
                        <div className="flex justify-center items-center m-6">

                            <p to="" className="pt-3 text-md text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out font-bold">Forgot Password?
                                <button className='text-paste hover:text-dark-paste focus:text-dark-paste  uppercase font-bold' onClick={resetPassword} type='button'>&nbsp;Reset Password</button></p>
                        </div>
                        <p className="text-black mt-6 text-md text-center font-bold">Don't have an Account? <Link to="/register"
                            className="text-paste font-bold hover:text-dark-paste  focus:text-dark-paste transition duration-200 ease-in-out uppercase">Register</Link>
                        </p>
                    </form>
                    <div className="or w-full"> OR </div>
                    <Socials></Socials>
                </div>
            </div>

        </section>
    );
};

export default Login;