import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../Dashboard/Dashboard.css'
const Dashboard = () => {
    return (
        <section>
            <div className="relative min-h-screen md:flex" data-dev-hint="container">
                <input type="checkbox" id="menu-open" className="hidden" />

                <label for="menu-open" className="absolute right-2  bottom-0 top-20 pl-10  pt-[50px] text-black md:hidden" data-dev-hint="floating action button">
                    <FontAwesomeIcon className='text-lg p-2 shadow-md rounded-md' icon={faBars}></FontAwesomeIcon>
                </label>

                <header className="bg-gray-600 text-black flex justify-between md:hidden" data-dev-hint="mobile menu bar">
                    <a href="!#" className="block p-4 text-white font-bold whitespace-nowrap truncate">
                        Your App is cool
                    </a>

                    <label for="menu-open" id="mobile-menu-button" className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
                        <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </label>
                </header>

                <aside id="sidebar" className=" bg-light-off-white text-black md:w-60 w-1/2 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                    <div className="flex flex-col space-y-6 pt-20" data-dev-hint="optional div for having an extra footer navigation">
                        <a href="!#" className="text-black flex items-center space-x-2 px-4">


                        </a>

                        <nav data-dev-hint="main navigation">
                            <Link to="/dashboard" className="flex items-center space-x-2 py-2 px-14 transition duration-15- ease-in-out hover:bg-dark-sky-blue hover:text-white font-bold"><span>My Profile</span>
                            </Link>
                            <Link to="myorders" className="flex items-center space-x-2 py-2 pb-3 px-14 transition duration-15- ease-in-out hover:bg-dark-sky-blue hover:text-white  font-bold"><span>My Orders</span>
                            </Link>
                            <hr className='h-0.5 bg-gray-300' />
                            <Link to="addreview" className="flex items-center space-x-2 py-2 px-14 transition duration-15- ease-in-out hover:bg-dark-sky-blue hover:text-white  font-bold"><span>Add a Review</span>
                            </Link>


                        </nav>
                    </div>

                </aside>

                <main id="content" className="flex-1 p-6 lg:px-8 mt-5">
                    <div className="max-w-7xl mx-auto">
                        {/* <!-- Replace with your content --> */}
                        <div className="px-4 pt-9 md:pt-20 pb-6 sm:px-0">
                            <span className="text-2xl md:text-3xl font-bold my-10 font-headings ">Dashboard</span>
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