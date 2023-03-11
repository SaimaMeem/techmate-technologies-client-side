import { faBagShopping, faBars, faClipboardList, faFileCirclePlus, faListCheck, faPlugCirclePlus, faUser, faUsers, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import '../Dashboard/Dashboard.css'
const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <section>
            <div className="relative min-h-screen md:flex" data-dev-hint="container">
                <input type="checkbox" id="menu-open" className="hidden" />
                {/* 
                <label for="menu-open" className="absolute right-2  bottom-0 text-black md:hidden" data-dev-hint="floating action button">
                    <FontAwesomeIcon className='text-lg p-2 ' icon={faBars}></FontAwesomeIcon>
                </label> */}

                {/* top-20 pl-10  pt-[50px]  */}

                <aside id="sidebar" className=" bg-light-off-white text-black md:w-60 w-1/2 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto  z-30  shadow-[10px_0_10px_-3px_rgba(0,0,0,0.1)]" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation shadow-lg ">
                    <div className="flex flex-col space-y-6 md:pt-24" data-dev-hint="optional div for having an extra footer navigation">
                        <a href="!#" className="text-black flex items-center space-x-2 px-4">
                        </a>

                        <nav data-dev-hint="main navigation">
                            <Link to="/dashboard" className="flex items-center space-x-2 py-2 px-8 transition duration-150 ease-in-out hover:bg-dark-sky-blue hover:text-white font-bold">
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                <span>My Profile</span>
                            </Link>
                            {!admin && <Link to="myorders" className="flex items-center space-x-2 py-2 pb-3 px-8 transition duration-150 ease-in-out hover:bg-dark-sky-blue hover:text-white  font-bold">
                                <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                                <span>My Orders</span>
                            </Link>}
                            {admin && <Link to="allusers" className="flex items-center space-x-2 py-2 px-8 transition duration-150 ease-in-out hover:bg-dark-sky-blue hover:text-white  font-bold">
                                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                                <span>All Users</span>
                            </Link>}
                            {admin && <Link to="manageparts" className="flex items-center space-x-2 py-2 px-8 transition duration-150 ease-in-out hover:bg-dark-sky-blue hover:text-white  font-bold">
                                <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
                                <span>Manage Parts</span>
                            </Link>}
                            {admin && <Link to="manageorders" className="flex items-center space-x-2 py-2 px-8 transition duration-150 ease-in-out hover:bg-dark-sky-blue hover:text-white  font-bold">
                                <FontAwesomeIcon icon={faClipboardList}></FontAwesomeIcon>
                                <span>Manage Orders</span>
                            </Link>}

                            <hr className='bg-gray-300' />

                            {!admin && <Link to="addreview" className="flex items-center space-x-2 py-2 px-8 transition duration-150 ease-in-out hover:bg-dark-sky-blue hover:text-white  font-bold">
                                <FontAwesomeIcon icon={faFileCirclePlus}></FontAwesomeIcon>
                                <span>Add a Review</span>
                            </Link>}

                            {admin && <Link to="addpart" className="flex items-center space-x-2 py-2 px-8 transition duration-150 ease-in-out hover:bg-dark-sky-blue hover:text-white  font-bold">
                                <FontAwesomeIcon icon={faPlugCirclePlus}></FontAwesomeIcon>
                                <span>Add a Part</span>
                            </Link>}


                        </nav>
                    </div>

                </aside>
                <header className="mt-24 flex justify-end items-center md:hidden" data-dev-hint="mobile menu bar">
                    <Link to="/dashboard" className="block p-4  font-bold whitespace-nowrap truncate">
                        <span className='text-3xl text-right'> Dashboard</span>
                    </Link>

                    <label htmlFor="menu-open" id="mobile-menu-button" className="m-2 py-2 px-3 focus:outline-none shadow-md rounded-full">
                        {/* <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg> */}
                        {/* <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg> */}
                        <FontAwesomeIcon id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" icon={faBars}></FontAwesomeIcon>
                        <FontAwesomeIcon id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" icon={faXmark}></FontAwesomeIcon>
                    </label>
                </header>
                <main id="content" className="flex-1  md:pt-24 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* <!-- Replace with your content --> */}
                        <div className="px-4 pb-6 sm:px-0">
                            <span className="hidden md:block text-2xl md:text-3xl font-bold mt-10 mb-3  font-headings ">Dashboard</span>
                            <Outlet></Outlet>
                        </div>
                        {/* <!-- /End replace --> */}
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Dashboard;