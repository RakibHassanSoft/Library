import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ data }) => {
    // console.log(data)
    const { bookName, quantity, rating, category, description, date, userId, url,
        Author,
        AuthorEmail } = data
    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-24 rounded-sm">
                            <img src={url} />
                        </div>
                    </div>

                        <div className="font-bold">{bookName}</div>


                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{Author}</span>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{category}</span>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{rating}</span>
            </td>

            <td>
               <Link to={`/update/${data?._id}`}> <button className="btn bg-blue-500 text-white btn-xs">Update</button></Link>


               <Link to={`/details/${data?._id}`}> <button className="btn bg-green-500 text-white btn-xs">Details</button></Link>

            </td>

        </tr>
    );
};

export default TableRow;