import axios from 'axios';
import React, { useState } from 'react';
import moment from 'moment';

const BorrowedBookRow = ({ data }) => {
    // data mean brought book single data 
    // console.log(data)
    const { bookName, bookId, category, date, description,status, userEmail ,_id} = data
    // console.log(bookName, bookId, category, date, description,status, userEmail ,_id)
    // console.log(moment().format('DD-MM-YYYY'));
    const [click,setClick] = useState(false)
    const handleReturn = () =>{
       const obj ={
        email:userEmail,
        borrowId:_id,
        return_date:moment().format('DD-MM-YYYY')
        //  const {   return_date, email,borrowId } = req.body;
       }
        axios.post(`http://localhost:5000/books/return/${bookId}`,obj)
        .then(res=>{
            console.log(res.data)
            if(res.acknowledged == true){
                setClick(true);
            }
        })
    }
  
    return (
        <tr>
            <th>
               
            </th>
            <td>
                <div className="flex items-center gap-3">
                    
                    <div>
                        <div className="font-bold">{bookName}</div>
                    </div>
                </div>
            </td>
            <td>
                {category}
               
            </td>
            <td>{date}</td>
            <td>{data?.return_date ? data?.return_date :'__________'}</td>
            <th>
                <h1 className=" bg-green-300 pt-1 pb-1 text-center rounded text-white">{status}</h1>
            </th>
            <th>
                {
                    status === 'Returned' && <button onClick={handleReturn} className="text-red-500 bg-gray-200 pl-2 pr-2 pt-1 pb-1 rounded-xl">Returned</button>
                }
                {
                    status ==='borrow' &&  <button onClick={handleReturn} className="btn bg-green-500 text-white btn-xs">Return now</button>
                }
                
            </th>
        </tr>
    );
};

export default BorrowedBookRow;
