import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BorrowedBookRow from '../../components/BorrowedBookRow';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BorrowedBook = () => {
    const { user } = useContext(AuthContext);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const notify = () => toast("Wow so easy!");
  

    const url = `http://localhost:5000/books/borrow/${user?.email}`
    useEffect(()=>{
        axios.get(url,{withCredentials:true}) //ithCredentials:true sending cookie to backend
        .then((response) => {
            // console.log(response.data);
            setBorrowedBooks(response.data); 
        
           
        })
        .catch(err => {
            console.log(err);
        });
        // fetch(`http://localhost:5000/books/borrow/${user?.email}`)
        // .then(res=> res.json())
        // .then(data=>{
        //     // console.log(data)
        //     setBorrowedBooks(data)
        // })
       },[url])
    // useEffect(() => {
    //     // Axios request to fetch borrowed books
        // axios.get(`http://localhost:5000/books/borrow/${user?.email}`)
        //     .then((response) => {
        //         console.log(response.data);
        //         setBorrowedBooks(response.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    // }, [borrowedBooks]); // Empty dependency array to ensure the effect runs only once on component mount

    return (
        <div className='mt-44 bg-white dark:bg-slate-50'>
            <div>
                <h1 className='text-4xl text-center font-bold mt-10 mb-10'>Books that you have already borrowed and returned</h1>
   
            </div>
            <div className="overflow-x-auto">
               {
                borrowedBooks.length>0 && <div>
                     <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Book Name</th>
                            <th>Category</th>
                            <th>Borrowed Date</th>
                            <th>Return Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through the borrowedBooks state to render BorrowedBookRow components */}
                        {borrowedBooks.length>0 && borrowedBooks.map((data, index) => <BorrowedBookRow key={index} data={data} />)}
                       
                    </tbody>
                </table>

                </div>
               }
                {
                   borrowedBooks.length<=0 && <div> <h1 className='text-3xl text-red-500 text-center'>There is no book</h1></div>
                 }
            </div>
        </div>
    );
};

export default BorrowedBook;
