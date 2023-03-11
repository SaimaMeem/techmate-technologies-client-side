import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import brandLogo from '../images/brandlogo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faSignInAlt, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loader from './Loader';
const Header = () => {

    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/login');
    };
    if (loading) {
        <section className="pt-36 pb-28">
            <Loader />
        </section>
    }
    return (
        <div className='relative'>
            <nav
                className="fixed w-full flex items-center justify-between py-3  text-black bg-light-off-white shadow-lg navbar navbar-expand-lg navbar-dark h-24 font-semibold z-40">
                <div className="container-fluid w-full flex  items-center justify-between sm:justify-between px-6 relative">

                    <button
                        className="navbar-toggler text-black border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    <div className="container-fluid">
                        <Link className="flex items-center text-black mt-2 lg:mt-0 ml:20 pl-6 sm:pl-16 lg:ml-0" to="/home#banner">
                            <img className="hidden mr-2 sm:block" src={brandLogo} style={{ height: "40px" }} alt="" loading="lazy" />
                            <div className='flex flex-col text-left font-logo-text'>
                                <span className="font-bold text-xl">Techmate
                                </span>
                                <span className="font-bold text-xl">
                                    Technologies</span>
                            </div>
                        </Link>
                    </div>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse flex-grow items-center justify-center" aria-hidden="true" id="navbarSupportedContent">
                            <ul className="navbar-nav flex flex-col list-style-none   absolute z-200 transition-all ul-items bg-light-off-white shadow-lg md:shadow-none text-black">
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white px-3 py-2 rounded-md">
                                    <Link className="nav-link text-black" to='/home#banner'>Home</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                </li>
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-black"
                                        to='/home#available-parts'
                                    >Available Parts</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                </li>
                                {/* <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-black"
                                        to='/manageinventories'
                                    >Manage Inventories</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                </li> */}

                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-black"
                                        to='/home#faqs'
                                    >FAQs</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                </li>
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-black"
                                        to='/home#reviews'
                                    >Reviews</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                </li>
                                {/* <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-black"
                                        to='/blogs'
                                    >Blogs</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                </li> */}
                                {/* <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-black"
                                        to='/portfolio'
                                    >Portfolio</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                </li> */}
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-black"
                                        to='/dashboard'
                                    >Dashboard</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-sky-blue"></span>
                                </li>

                            </ul>
                            {/* <!-- Left links --> */}
                        </div>
                    </div>

                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div className='container-fluid relative'>
                        <div className="flex items-center">
                            {
                                user ? <div className="dropdown relative">
                                    <Link
                                        className="dropdown-toggle flex items-center hidden-arrow  rounded-full focus:outline-none hover:font-bold"
                                        to='/'
                                        id="dropdownMenuButton2"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">

                                        <div className='md:inline-block hidden cursor-pointer'> &nbsp;&nbsp;{user?.displayName}&nbsp;&nbsp;</div>
                                        {user?.photoURL ? <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt="" />
                                            : <FontAwesomeIcon icon={faUserCircle} className='h-5 w-5'></FontAwesomeIcon>
                                        }&nbsp; &nbsp;
                                        <FontAwesomeIcon className='hidden lg:block' icon={faCaretDown}></FontAwesomeIcon>
                                    </Link>
                                    <ul
                                        className="dropdown-menu min-w-max absolute hidden bg-light-off-white text-base z-110 float-left py-2 px-4 list-none text-left rounded-lg shadow-xl mt-1 m-0 bg-clip-padding border-none left-auto right-0 w-full"
                                        aria-labelledby="dropdownMenuButton2"
                                    >
                                        {/* <li>
                                            <Link
                                                className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent hover:font-bold  active:bg-off-white rounded-md"
                                                to='/myitems'>My Items</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent hover:font-bold  active:bg-off-white rounded-md"
                                                to='/manageinventories'>Manage Items</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent hover:font-bold  active:bg-off-white rounded-md"
                                                to='/additem'>Add New Item</Link>
                                        </li>
                                        <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25 w-full px-0" /> */}
                                        <li>
                                            <button to='' onClick={logOut}
                                                className="text-left dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent hover:font-bold  active:bg-off-white rounded-md"> SignOut &nbsp;
                                                <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon></button>
                                        </li>
                                    </ul>
                                </div>
                                    :
                                    <Link
                                        to='/login'
                                        className="flex items-center hidden-arrow  rounded-full focus:outline-none hover:font-bold">
                                        <div className='hidden sm:inline-block'> &nbsp;&nbsp;Login&nbsp;&nbsp;</div>
                                        <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
                                    </Link>
                            }
                        </div>
                    </div>
                    {/* <!-- Right elements --> */}

                </div>
            </nav>


        </div>
    );
};

export default Header;