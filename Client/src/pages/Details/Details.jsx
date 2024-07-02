import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
const Details = () => {

    const { user, UserFromDatabsaae } = useContext(AuthContext)


    const loadedData = useLoaderData();


    const { id } = useParams();

    const navigate = useNavigate()
    // Find the single data object with the matching id
    const singleData = loadedData.find(d => d._id === id);

    const { _id, bookName, quantity,date, rating, category, description, url, userId, Author } = singleData

   
    const formHandle = (e) => {
        e.preventDefault()
        const form = e.target;
        const date = form.date.value;
        // console.log(date)
        const newData = {
            bookName: bookName,
            category: category,
            description: description,
            date: date,
            userEmail: user?.email,
        }
          console.log(newData)
        if (user) {
            axios.post(`http://localhost:5000/books/borrow/${singleData?._id}`, newData)
                .then(function (response) {
                    console.log(response);
                    navigate('/borrowed-book')

                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            // navigate('/login')
        }
    }


  
    return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 mt-44">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img
                    className="w-full"
                    alt="image of a girl posing"
                    src={url}
                />

            </div>
            <div className="md:hidden">
                <img
                    className="w-full"
                    alt="image of a girl posing"
                    src={url}
                />

            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-3xl font-bold leading-none text-black  ">
                        {bookName}
                    </p>
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-orange-600 mt-2">
                        writer :  {Author}
                    </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800 ">
                        Quantity
                    </p>
                    <p className="">
                        {quantity}
                    </p>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800 ">
                        Rating
                    </p>
                    <p className="">

                        <Rating
                            initialRating={parseFloat(rating)}
                            readonly // Make the rating read-only

                        />

                    </p>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800 ">
                        Last update
                    </p>
                    <p className="">
                        {date}
                    </p>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800 ">
                        Category
                    </p>
                    <div className="flex items-center justify-center">
                        {category}
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl text-blue-500 font-bold'>Description :</h1>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-black  mt-7">
                        {description}
                    </p>

                </div>


                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <div className='flex justify-center mt-10'>
                    <button className="btn w-1/2 bg-green-500 text-white m-auto hover:bg-blue-500 hover:text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h1 className='text-center text-3xl mt-2 mb-2 font-bold text-blue-800'>Borrow</h1>
                <form onSubmit={formHandle}>
                    <label className="input input-bordered flex items-center gap-2 mt-3 mb-3">
                        <input type="text" className="grow" placeholder={Author}  readOnly/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-3 mb-3">
                        <input type="text" className="grow" placeholder={singleData?.userEmail ? singleData?.userEmail : user?.email} readOnly />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="date" name='date' className="grow" placeholder="date" />
                    </label>
                    <div className="modal-action">
                        <button type="submit" data-tip="Brrow" className='btn tooltip rounded-md text-white border bg-blue-900 text-center w-1/2 m-auto h-20 flex justify-center items-center'>
                            <h1 className='p-10 text-center '>Submit</h1>
                        </button>
                    </div>
                </form>
            </div>
        </dialog>



            </div>
        </div>

    );
};

export default Details;