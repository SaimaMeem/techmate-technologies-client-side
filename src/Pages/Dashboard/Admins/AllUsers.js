import React from 'react';
import { useQuery } from 'react-query';
import PageTitle from '../../../shared/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user/`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`,
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
            .then(res =>{if(res.status ===400){
                toast.error("Failed to make an Admin!")
            }})
            .then(data => {
                if(data.modifiedCount){
                    refetch();
                    toast.success(`Successfully made an Admin!`);
                }
           
            })
    }
    if (isLoading) {
        return <>
            <section className="pt-36 pb-28">
                <div className="text-center">
                    <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-dark-sky-blue font-bold" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </section>
        </>
    }
    let count = 1;
    return (
        <section>
            <PageTitle title={'Dashboard - Users'}></PageTitle>
            <div className='pt-1 pb-24'>
                <h3 className="leading-tight text-2xl font-bold mb-2"> Users</h3>
                <div className="flex flex-col justify-center">
                    <div className="overflow-x-auto sm:mx-6 lg:mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden  rounded-lg shadow-lg">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-gray-800 text-white font-semibold">
                                        <tr className='border'>
                                            <th scope="col" className="text-sm py-4 px-2  border-r">
                                                SI No.
                                            </th>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                Username
                                            </th>
                                            <th scope="col" className="text-sm py-4 px-2 border-r">
                                                Email
                                            </th>
                                            <th scope="col" className="text-sm py-4 px-2 border-r">
                                                Role
                                            </th>
                                            <th scope="col" className="text-sm py-4 px-2  border-r">
                                                Action
                                            </th>
                                            {/* <th scope="col" className="text-sm py-4 px-2  border-r">
                                                Status
                                            </th> */}


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.length ?

                                            users.map(user =>
                                                <tr key={user._id} className="bg-white  transition duration-300 ease-in-out hover:bg-gray-100 border">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">{count++}</td>
                                                    <td className="text-sm font-medium px-3 py-4 whitespace-nowrap border-r flex items-center justify-center gap-2 cursor-pointer" type='button'>
                                                        <img className="rounded-lg h-8 w-8 object-cover hidden md:block" src={user?.image} alt="" />  {user?.username}
                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        {user?.email}

                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        {user?.role && <span className='text-dark-sky-blue font-semibold'>Admin</span>}
                                                    </td>
                                                    <td className="text-lg font-medium px-6 py-2 whitespace-nowrap border-r">
                                                        {user?.role !== 'admin' && <button onClick={() => { makeAdmin(user?.email) }} type="submit" data-mdb-ripple="true"
                                                            data-mdb-ripple-color="light" className="ml-auto mt-4 lg:mt-0 inline-block px-8 py-2 bg-pastel-green-dark text-white font-bold text-xs leading-tight rounded shadow-md hover:bg-pastel-green-darker hover:shadow-lg focus:bg-pastel-green-darker focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pastel-green-darkest active:shadow-lg transition duration-150 ease-in-out" > <FontAwesomeIcon icon={faUserGear}></FontAwesomeIcon> &nbsp;Make Admin</button>}

                                                    </td>
                                                    {/* <td className="text-lg font-medium px-6 py-2 whitespace-nowrap border-r">
                                                        <button className='text-redd disabled:text-gray-400 disabled:cursor-not-allowed' data-bs-toggle="modal"
                                                            data-bs-target="#staticBackdrop" type=''></button>

                                                    </td> */}

                                                </tr>
                                            ) : <tr>
                                                <td colSpan="6" className='py-5 font-bold' >There is no user to show!</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <DeleteConfirmationModal orderId={orderId} partName={partName} confirmModal={submitDelete} /> */}
        </section>
    );
};

export default AllUsers;