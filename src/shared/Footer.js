import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer className="w-full flex flex-col mt-auto text-center lg:text-left bg-light-off-white ">
            <div className="w-full flex flex-wrap  justify-center items-center lg:justify-evenly p-6 border-t border-gray-300">

                <div className="mr-12 hidden lg:block">
                    <span className='font-bold'>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center">
                    <a href="#!" className="mr-6 ">
                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                    <a href="#!" className="mr-6 ">
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                    <a href="#!" className="mr-6 ">
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </a>
                    <a href="#!" className="mr-6 ">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a href="#!" className="mr-6 ">
                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                    </a>
                </div>
            </div>
            <div className="mx-6 py-10 text-center md:text-left">

                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-2">
                    <div className="order-1">
                        <p className="uppercase font-bold mb-4 flex justify-center">
                            <FontAwesomeIcon icon={faCube} className='pt-1 pr-2'></FontAwesomeIcon>
                            Techmate Technologies
                        </p>
                        <p className="flex justify-center mb-4 pl-16 pr-8 text-left md:text-center">
                            Techmate Technologies is a Manufacturing Company of Computer Parts. We manufacture all types of computer parts on our own.
                        </p>
                    </div>
                    <div className="order-4">
                        <h6 className="uppercase font-bold mb-4 flex justify-center">
                            Customer Service
                        </h6>
                        <p className="mb-4 flex justify-center">
                            <a href="#!" className="">Contact Us</a>
                        </p>
                        <p className="mb-4 flex justify-center">
                            <a href="#!" className="">FAQs</a>
                        </p>
                    </div>
                    <div className="order-3">
                        <h6 className="uppercase font-bold mb-4 flex justify-center">
                            About Techmate Technologies
                        </h6>
                        <p className="flex justify-center mb-4">
                            <Link to="#!" className="">About Us</Link>
                        </p>
                        <p className="flex justify-center mb-4">
                            <Link to="/home#business-summary" className="">Our Growth</Link>
                        </p>
                        <p className="flex justify-center mb-4">
                            <Link to="/home#reviews" className="">Reviews</Link>
                        </p>
                        {/* <p className="mb-4 flex justify-center">
                            <a href="#!" className="">Another</a>
                        </p> */}
                    </div>

                    <div className="order-2 lg:order-4">
                        <h6 className="uppercase font-bold mb-4 flex justify-center">
                            Contact
                        </h6>
                        <p className="flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                            &nbsp; &nbsp;New York, NY 10012, US
                        </p>
                        <p className="flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            &nbsp; &nbsp;techmatetechnologies@gmail.com
                        </p>
                        <p className="flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            &nbsp; &nbsp;+ 01 432 234 77
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-6 bg-light-off-white-darker shadow-lg">
                <p className='font-bold'>Copyright &copy; {year} | Techmate Technologies</p>
            </div>
        </footer>
    );
};

export default Footer;