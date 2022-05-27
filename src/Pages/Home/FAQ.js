import React from 'react';
import faqImage from '../../images/faq.jpg';
const FAQ = () => {
    return (
        <section className='my-10' id='faqs'>
            <h3 className="leading-tight text-4xl font-bold my-10 font-headings">FAQs </h3>
            <div className='grid grid-cols-1 lg:grid-cols-5 my-10 gap-10 mx-4 md:mx-20 justify-center items-center'>
                <div className=" bg-white w-full col-span-3 order-2 lg:order-1">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="headingOne">
                                <button className=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <span className='text-dark-sky-blue font-bold'>   What is the process of Bundle Purchases?</span>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5 text-left">
                                    Bundles are offered as a way to purchase multiple items together at a discounted price. If you wish to return a Bundle for a refund, you must request a return within the applicable Techmate Technologies Return Policy period and you must return the ENTIRE BUNDLE.
                                    <br />
                                    Parts sold as part of a Bundle may be returned individually for replacement if you request a replacement within the applicable Techmate Technologies Return Policy period for that individual item.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="headingTwo">
                                <button className=" accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-black font-bold text-left bg-white border-0 rounded-none transition focus:outline-none " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collaps Two">
                                    <span className='text-dark-sky-blue font-bold'>What is the return policy?</span>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5 text-left">
                                    If parts are defective or damaged, they will be replaced at no charge within 30days. Guarantee void if modifications/repairs are performed by anyone except us.
                                    <br />
                                    Techmate Technologies understands that sometimes products do not fit the needs of our customers for one reason or another. Therefore, when returning products, we ask that you follow the steps outlined below:
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="headingThree">
                                <button className=" accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-black font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span className='text-dark-sky-blue font-bold'>   What is the process of Return Shipping Labels?</span>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5 text-left">

                                    Techmate Technologies  does not charge for return shipping labels for products up to 50lbs. You may request a courtesy prepaid return label during the return creation process.
                                    <br />
                                    For products that are eligible for return for replacement, the return shipping labels are free for returns for replacement of the same item within the applicable return policy period. For returns of unopened items that were originally shipped via large item shipments, customers are responsible for any such return shipping costs.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='order-1 lg:order-2 w-full col-span-2 ml-4 flex justify-center items-center'>
                    <img className="w-full h-72 sm:h-96 md:h-84 object-cover rounded-lg" src={faqImage} alt="" />
                </div>
            </div>
        </section>
    );
};

export default FAQ;