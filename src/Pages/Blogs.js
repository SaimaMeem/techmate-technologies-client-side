import React from 'react';
import PageTitle from '../shared/PageTitle';

const Blogs = () => {
    return (
        <section>
            <PageTitle title={'Blogs'}></PageTitle>
            <div className='pt-36 pb-28 md:px-20'>
                <h3 className="leading-tight text-3xl font-bold mb-2">  Blogs</h3>
                <div className="accordion font-medium  shadow-lg rounded-lg text-left" id="accordionExample">
                    <div className="accordion-item bg-white border border-gray-200 py-3">
                        <h2 className="accordion-header mb-0" id="headingOne">
                            <button className=" accordion-button  font-bold relative flex items-center w-full py-4 px-5 text-base text-black text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-target="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne">
                                <span className='text-dark-sky-blue'>How will you improve the performance of a React Application?</span>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                            <div className="accordion-body py-4 px-5">
                                There are multiple ways to improve the performance of a <b>React Application</b>. And they are given below.
                                <div className='py-1'></div>
                                When styles are implied inline, the browser invests a lot of time rendering. So, generating a separate style.js file and importing it into the component is a quicker method.
                                Using react fragments reduces the numbers of extra tags and fulfills the need of having a single parent element in the component
                                When inline function is used, the function will produce a new instance of the object in every render and there will be multiple instances of these functions which will lead to consuming more time in garbage collection. To optimize that functions can be defined outside the render method and call them wherever required.
                                By splitting the files into resource and on-demand code files the time consumed can be reduced in presenting bundled files to the browser.

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-white border border-gray-200 py-3">
                        <h2 className="accordion-header mb-0" id="headingTwo">
                            <button className=" accordion-button   font-bold flex items-center w-full py-4 px-5 text-base text-black text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                <span className='text-dark-sky-blue'>What are the different ways to manage a state in a React application?</span>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse" aria-labelledby="headingTwo">
                            <div className="accordion-body py-4 px-5">
                                <b>useState()</b> and <b>Context API</b> states can be managed in a React application.
                                The <b>useState()</b> is a react hook that allows to have state variables in functional components. This hook is a special function that takes the initial state as an argument and returns an array of two entries.
                                <div className='py-1'></div>
                                The <b>Context API</b> is used to create global variables that can be passed around all the components in a React App. React.createContext() is used to create a context. It returns a consumer and a provider. Provider is a component that offers the state to its children. It keeps the "store" and be the parent of all the components that might need that store later. Here, consumer is a component that consumes and uses the state.

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-white border border-gray-200">
                        <h2 className="accordion-header mb-0" id="headingThree">
                            <button className=" accordion-button  font-bold relative flex items-center w-full py-4 px-5 text-base text-black text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                aria-controls="collapseThree">
                                <span className='text-dark-sky-blue'> How does Prototypical Inheritance work?</span>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse" aria-labelledby="headingThree">
                            <div className="accordion-body py-4 px-5">
                                <b>Prototypical Inheritance</b> means to the ability to access object properties from another object. JavaScript prototype is used to add new properties and methods to an existing object constructor. We can inherit properties from a prototype. Prototypical inheritance allows to reuse the properties or methods from one JavaScript object to another through a reference pointer function. . Nowadays, in modern language, it is being set using <b>__proto__</b>.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-white border border-gray-200">
                        <h2 className="accordion-header mb-0" id="headingThree">
                            <button className=" accordion-button  font-bold relative flex items-center w-full py-4 px-5 text-base text-black text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                aria-controls="collapseFour">
                                <span className='text-dark-sky-blue'>Why you do not set the state directly in React. For example, if you have <code>
                                    const [products, setProducts] = useState([]). </code> Why you do not <code>set products = [...]</code> instead, you use the setProducts</span>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse" aria-labelledby="headingFour">
                            <div className="accordion-body py-4 px-5">
                                The reason behind using &nbsp; <code className='font-bold'>setProducts</code>&nbsp;  instead of &nbsp;<code className='font-bold'>products</code>&nbsp; directly is that, when we pass value inside &nbsp; <code className='font-bold'>setProducts</code>, this function renders, every the value changes, which will not happen if you directly set values to &nbsp;<code className='font-bold'>products</code>. In conclusion, to get the latest value everytime we use &nbsp; <code className='font-bold'>setProducts</code>.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-white border border-gray-200">
                        <h2 className="accordion-header mb-0" id="headingThree">
                            <button className=" accordion-button  font-bold relative flex items-center w-full py-4 px-5 text-base text-black text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                aria-controls="collapseFive">
                                <span className='text-dark-sky-blue'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</span>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse" aria-labelledby="headingFive">
                            <div className="accordion-body py-4 px-5">
                                <code> const filteredProduct = products.filter(product=>product.name="Desired Product");</code>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-white border border-gray-200">
                        <h2 className="accordion-header mb-0" id="headingThree">
                            <button className=" accordion-button  font-bold relative flex items-center w-full py-4 px-5 text-base text-black text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                                aria-controls="collapseSix">
                                <span className='text-dark-sky-blue'>What is a unit test? Why should write unit tests?</span>
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse" aria-labelledby="headingsix">
                            <div className="accordion-body py-4 px-5">
                                <b>Unit testing</b> is a software development process in which the smallest testable parts of an application are called units for individually and independently scrutinizing them. This is done during the software development process by the software developers and QA Engineers.
                              <b>  Unit tests</b> separate a function, class or method and only test that piece. Higher quality individual components build complete system resiliency. So, the process is reliable. Unit tests has also changed the nature of the debugging process.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;