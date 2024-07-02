import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../Provider/AuthProvider';
import Rating from 'react-rating';


const CategoryCard = ({ data }) => {
    const { UserFromDatabsaae, user } = useContext(AuthContext)
    const navigate = useNavigate()
    //    console.log(UserFromDatabsaae)
    const { bookName, quantity, rating, category, description, date, userId, url, Author, AuthorEmail } = data
    // console.log(data._id)
    const newData = {
        bookName: bookName,
        category: category,
        description: description,
        date: date,
        returnDate: null,
        status: false,
        userEmail: user?.email,
        bookId: data?._id
    }
    const handleBorrow = () => {
        if (user) {
            axios.post(`http://localhost:5000/books/borrow/${data?._id}`, {
                newData

            })
                .then(function (response) {
                    console.log(response);

                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            navigate('/login')
        }
    }

    return (
        <div className='shadow-xl max-w-96  h-[43rem] bg-white border p-1'>

            <div className='flex flex-col justify-between  '>
                <img
                    src={url}
                    alt=""
                    className='w-full h-96'
                />

                <div className=' w-full h-full  '>
                    <div className=' flex justify-between border mb-2'>
                        {
                            user ? <Link to={`/update/${data._id}`} data-tip="Update" className='tooltip flex justify-center items-center text-white bg-blue-800 border text-center w-full h-12 '>
                                <svg
                                    width="40px"
                                    height="40px"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z"
                                        fill="#fff"
                                    />
                                </svg>


                            </Link> : <Link to={`/login`} data-tip="Update" className='tooltip flex justify-center items-center text-white bg-blue-800 border text-center w-full h-12 '>
                                <svg
                                    width="40px"
                                    height="40px"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z"
                                        fill="#fff"
                                    />
                                </svg>


                            </Link>

                        }

                      

                        <Link to={`/details/${data?._id}`} data-tip="Details" className=' tooltip text-white border bg-blue-800   text-center w-full h-12 flex justify-center items-center'>
                            <svg
                                width="40px"
                                height="40px"
                                viewBox="0 0 512 512"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <title>details</title>
                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g
                                        id="Combined-Shape"
                                        fill="#fff"
                                        transform="translate(64.000000, 64.000000)"
                                    >
                                        <path d="M384,64 L384,384 L64,384 L64,64 L384,64 Z M341.333333,106.666667 L106.666667,106.666667 L106.666667,341.333333 L341.333333,341.333333 L341.333333,106.666667 Z M320,1.42108547e-14 L320,42.6666667 L42.666,42.666 L42.6666667,320 L1.42108547e-14,320 L1.42108547e-14,1.42108547e-14 L320,1.42108547e-14 Z M298.666667,234.666667 L298.666667,277.333333 L149.333333,277.333333 L149.333333,234.666667 L298.666667,234.666667 Z M298.666667,149.333333 L298.666667,192 L149.333333,192 L149.333333,149.333333 L298.666667,149.333333 Z"></path>
                                    </g>
                                </g>
                            </svg>

                        </Link>
                    </div>
                </div>
                <div className=' flex flex-col items-center'>
                    <h1 className='text-blue-600 font-bold text-3xl text-center'>{bookName}</h1>
                    <h1 className='text-orange-500 text-xl text-center'>{Author}</h1>
                    <div className='flex justify-between'>
                        <h1 className='text-black font-serif pl-2 pr-2  text-2xl text-center'>Category : </h1>
                        <h1 className='text-black font-serif pl-2 pr-2 text-2xl text-center'>{category}</h1>
                    </div>
                    <div className='flex justify-between mt-3'>

                        <h1 className='text-black font-serif pl-2 pr-2 text-2xl text-center'><Rating
                            initialRating={parseFloat(rating)}
                            readonly // Make the rating read-only
                           
                        /></h1>
                    </div>
                    <div className=' -bottom-20 right-0 w-full'>
                        {
                            quantity > 0 ? (
                                <h1 className='bg-green-600 rounded-full text-2xl text-center text-gray-100  p-3'>
                                    Aviable
                                </h1>
                            ) : (
                                <h1 className='text-red-500  rounded-full text-2xl text-center bg-gray-100  p-3'>
                                    Not Aviable
                                </h1>
                            )
                        }
                    </div>
                </div>


            </div>

        </div>
    );
};

export default CategoryCard;
