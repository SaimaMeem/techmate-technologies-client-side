import React from 'react';
import PageTitle from '../shared/PageTitle';
import image from '../images/me.jpg';
const Portfolio = () => {
    return (
        <section>
            <PageTitle title={'My Portfolio'}></PageTitle>
            <div className='pt-36 pb-24'>
                <h3 className="leading-tight text-3xl font-bold ">  My Portfolio</h3>
                <section className="p-6 md:p-12 text-center md:text-left rounded-md">
                    <div className="flex justify-center">
                        <div className="max-w-3xl">
                            <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
                                <div className="md:flex md:flex-row">
                                    <div
                                        className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0"
                                    >
                                        <img
                                            src={image}
                                            className="rounded-full shadow-md"
                                            alt="woman avatar"
                                        />
                                    </div>
                                    <div className="md:ml-6">
                                        <p className="font-semibold text-2xl">Saima Sultana</p>
                                        <p className="font-semibold mb-1 text-lg">saima.sultana1320@gmail.com</p>

                                        <p className="font-medium mb-2">
                                            I have completed my BSc in Computer Science and Engineering from Ahsanullah University of Science and Technology in 2021.
                                        </p>
                                        <p className="font-medium mb-2">
                                            Currently, I am working as a Full Stack Engineer at Altersense Ltd. for almost four months.
                                        </p>
                                        <p className="font-medium mb-2">
                                            <span className='font-bold'>Technologies/Skills: </span>
                                            HTML | CSS | JavaScript | Python | Bootstrap | Tailwind | React.js | Firebase | Node.js | Express.js
                                        </p>
                                        <p className="font-medium mb-2">
                                            <span className='font-bold'>Live Website Links: </span>
                                            <a className='text-sky-500 font-semibold' href=" https://picturesque-stories.web.app/" target="_blank">Picturesque Stories</a>
                                            &nbsp;&nbsp;|&nbsp;&nbsp;
                                            <a className='text-sky-500 font-semibold' href=" https://go4fresh-7ca7a.web.app/" target="_blank">Go4Fresh Stories</a>
                                            &nbsp;&nbsp;|&nbsp;&nbsp;
                                            <a className='text-sky-500 font-semibold' href=" https://techmate-technologies.web.app/" target="_blank">Techmate Technologies</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Portfolio;