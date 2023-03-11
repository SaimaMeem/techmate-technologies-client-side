import React from 'react';
import banner1 from '../../images/banner/1.jpg';
import banner2 from '../../images/banner/2.jpg';
import banner3 from '../../images/banner/3.jpg';
const Banner = () => {
    return (
        <div className='pt-24' id='banner'>
            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-fade relative"
                data-bs-ride="carousel" data-bs-interval="2000"
            >
                {/* <!-- Indicators --> */}
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div className="carousel-inner relative w-full overflow-hidden">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active relative float-left w-full z-10  overflow-hidden bg-no-repeat bg-cover" style={{ 'backgroundPosition': '50%' }}>
                        <img src={banner1}
                            className="block w-full object-cover h-96 md:h-[33rem]"
                            alt="Computer Parts" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-80"></div>
                        <div className="carousel-caption md:block absolute text-center">
                            <h5 className="lg:font-headings lg:text-4xl  text-md md:text-3xl font-semibold  text-white">Quality Without Compromise</h5>
                            <p className='pt-2 text-xs lg:text-2xl md:text-lg font-medium'>We try our heart and soul to provide best quality products available in the market because you deserve the best.</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full overflow-hidden bg-no-repeat bg-cover" style={{ 'backgroundPosition': '50%' }}>
                        <img src={banner2}
                            className="block w-full object-cover h-96 md:h-[33rem]"
                            alt="Computer Parts" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-60"></div>
                        {/* <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs" style={{ 'backgroundPosition': '50%' }}>
                            <img src={banner1} alt='' />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
                        </div> */}
                        <div className="carousel-caption md:block absolute text-center">
                            <h5 className="lg:font-headings lg:text-4xl  text-md md:text-3xl font-semibold  text-white">Every Detail, Done Right.</h5>
                            <p className='pt-2 text-xs lg:text-2xl md:text-lg font-medium'>We leave no stone unturned to produce the qualityful, durable and stylish products for you.</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full overflow-hidden bg-no-repeat bg-cover" style={{ 'backgroundPosition': '50%' }}>
                        <img src={banner3}
                            className="block w-full object-cover h-96 md:h-[33rem]"
                            alt="Computer Parts" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-80"></div>

                        <div className="carousel-caption md:block absolute text-center">
                            <h5 className="lg:font-headings lg:text-4xl  text-md md:text-3xl font-semibold  text-white">Nothing Less Than The Best</h5>
                            <p className='pt-2 text-xs lg:text-2xl md:text-lg font-medium'>Our aim is to deliver excellent products with best price and genuine service to all of our customers. </p>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner -->

  <!-- Controls --> */}
                <button
                    className="carousel-control-prev absolute top-0 bottom-0  items-center justify-start p-0 pl-4 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 hidden lg:flex"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 items-center justify-end p-0 pr-4 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 hidden lg:flex"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;