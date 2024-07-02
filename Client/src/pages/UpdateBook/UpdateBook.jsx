import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const UpdateBook = () => {
    const { UserFromDatabsaae } = useContext(AuthContext)
    // console.log(UserFromDatabsaae)

    const loadedData = useLoaderData();
    // console.log(loadedData);

    const { id } = useParams();
    // console.log(id);

    const singleData = loadedData.find((d) => d._id === id);
    // console.log(singleData);
    const { _id, bookName, quantity, rating, category, description, date, userId, url, Author, AuthorEmail } = singleData;


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const bookName1 = form.bookName.value !== '' ? form.bookName.value : bookName;
        const quantity1 = parseInt(form.quantity.value !== '' ? form.quantity.value : quantity);
        const rating1 = form.rating.value !== '' ? form.rating.value : rating;
        const category1 = form.category.value !== '' ? form.category.value : category;
        const description1 = form.description.value !== '' ? form.description.value : description;
        const date1 = form.date.value !== '' ? form.date.value : date;
        const userId1 = form.userId.value !== '' ? form.userId.value : userId;
        const url1 = form.url.value !== '' ? form.url.value : url;
        // console.log(bookName, quantity, rating, category, description, date, userId, url)
        const newBook = {
            bookName1, quantity1, rating1, category1, description1, date1, userId1, url1,
            Author: UserFromDatabsaae?.displayName,
            AuthorEmail: UserFromDatabsaae?.email
        }
        axios.put(`http://localhost:5000/books/${_id}`, newBook) // Use PUT method and include the book ID in the endpoint
            .then(response => {
                console.log(response.data); // Logging the response data
                // Handle success
                if(response.data.modifiedCount > 0){
                    alert("Done")
                }else{
                    alert("Failed")
                }
            })
            .catch(error => {
                console.error(error); // Logging the error
                // Handle error
            });

    }

    return (
        <div className='bg-slate-400 mt-44'
            style={{
                backgroundImage: `url(https://th.bing.com/th/id/R.c3776aafcfd6245fbf12abd250aeb163?rik=i7wScWhYI2TlOQ&riu=http%3a%2f%2fstatic.guim.co.uk%2fsys-images%2fGuardian%2fPix%2fpictures%2f2015%2f1%2f6%2f1420565135254%2f4d0dcb52-a943-424d-b1cd-44c8e641e22a-2060x1276.jpeg&ehk=nN9gqIFDmxkxKgEuhYDzEX0AlYLY1q0QrhOvNjbt7to%3d&risl=&pid=ImgRaw&r=0)`,
                backgroundSize: 'cover', // Adjust as needed
                backgroundPosition: 'center', // Adjust as needed
                width: '', // Set width to cover the entire viewport
                height: 'cover', // Set height to cover the entire viewport
            }}
        >
            <div className='flex flex-col justify-center items-center mb-5 bg-black bg-opacity-50 h-44'>
                <h1 className='text-4xl font-bold text-white'>Here you can add book</h1>
                <p className='text-md text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus debitis tenetur veniam excepturi dolores suscipit facilis voluptate hic maiores.</p>
            </div>
            <div className='flex'>
                <form onSubmit={handleSubmit} action="" className='w-full mt-24 mb-24  ' >
                    <div className='w-11/12 m-auto flex flex-row text-2xl  gap-3 bg-opacity-50 bg-green-400 p-10'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="" className='text-Black font-bold w-36 '>Book Name</label>
                            <input name='bookName' type="text" className='h-12 rounded-lg text-green-500 text-center' placeholder={bookName} />
                            <div className='flex justify-between gap-5'>
                                <div className='flex flex-col w-1/2'>
                                    <label htmlFor="" className='font-bold'>Quantity</label>
                                    <input type="number" name='quantity' className='h-12 rounded-lg text-green-500 text-center' placeholder={quantity} />
                                </div>
                                <div className='flex flex-col w-1/2'>

                                    <label htmlFor="" className='font-bold'>Rating</label>
                                    <input type="number" name='rating' className='rounded-lg h-12 text-center text-green-500 ' min={0} max={5} placeholder={rating} />
                                </div>
                            </div>
                            <label htmlFor="" className='font-bold' >Author Name</label>
                            <input type="text" className='bg-white text-green-500 mb-3 rounded-lg h-12 text-center' placeholder={UserFromDatabsaae?.displayName} readOnly />
                            <label htmlFor="" className='font-bold' >Category</label>
                            <select name='category' className='bg-white h-12 rounded-lg text-green-500  justify-center text-center font-bold'>
                                {
                                    category && <option className='bg-white text-blue-500 border-none' value="Novel">Novel</option>
                                }
                                <option className='bg-white text-blue-500 border-none' value="Novel">Novel</option>
                                <option className='bg-white text-blue-500' value="Thriller">Thriller</option>
                                <option className='bg-white text-blue-500' value="History">History</option>
                                <option className='bg-white text-blue-500' value="Drama">Drama</option>
                                <option className='bg-white text-blue-500' value="Sci-Fi">Sci-Fi</option>
                            </select>

                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="" className='font-bold'>Short description</label>
                            <textarea name='description' className="textarea textarea-bordered text-xl text-green-500" placeholder={description}></textarea>
                            <label htmlFor="" className='font-bold'>Version update</label>
                            <input name='date' type="date" className='h-12 rounded-lg text-green-500 text-center' id="" />
                            <label htmlFor="" className='font-bold'>User ID</label>
                            <input name="userId" className='h-12 rounded-lg text-green-500 text-center' readOnly id="" placeholder={UserFromDatabsaae?._id} />
                            <label htmlFor="" className='font-bold'>Book image</label>
                            <textarea name='url' className="textarea textarea-bordered text-xl text-green-500 text-center" placeholder={url}></textarea>

                        </div>

                    </div>
                    <div className='flex justify-center mt-10 '>
                        <button className='btn w-44 bg-green-500 border-none text-white text-2xl'>Add Book</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateBook;