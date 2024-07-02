import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (

        <div className='w-11/12 m-auto'>
            <h1 className='text-4xl text-center h-12 mt-12 mb-10 font-bold'>All Categories</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 text-white font-serif '>
                <Link to='http://localhost:5173/category/Novel' className='flex flex-col ' >
                <img className='h-96 transition-transform duration-300 transform hover:scale-110 ' src="https://th.bing.com/th/id/OIP.wcZjPkH4FZD5QYi_2kfxxAAAAA?rs=1&pid=ImgDetMain" alt="Novel" />
                    <h1 className='text-3xl text-center mt-6 h-12 bg-blue-500 rounded'>Novel</h1>
                </Link>
                <Link to='http://localhost:5173/category/Drama' className='flex flex-col'>
                <img className='h-96 transition-transform duration-300 transform hover:scale-110' src="https://th.bing.com/th/id/OIP.NGofr7d8y6lcAUn2SeXXPgHaLZ?rs=1&pid=ImgDetMain" alt="" />
                    <h1 className='text-3xl text-center h-12 mt-6  bg-blue-500 rounded'>Drama</h1>
                </Link>
                 <Link to='http://localhost:5173/category/Sci-Fi'  className='flex flex-col'>
                <img className='h-96 transition-transform duration-300 transform hover:scale-110' src="https://d30a6s96kk7rhm.cloudfront.net/original/readings/978/014/103/9780141036144.jpg" alt="" />
                    <h1 className='text-3xl text-center h-12 mt-6  bg-blue-500 rounded'>Sci-Fi</h1>
                </Link>
                <Link to='http://localhost:5173/category/Fantasy'  className='flex flex-col'>
                <img className='h-96 transition-transform duration-300 transform hover:scale-110' src="https://th.bing.com/th/id/R.800a59c55f866d8e6e249eb545258936?rik=a7VD3%2fs%2bMuU41A&pid=ImgRaw&r=0" alt="" />
                    <h1 className='text-3xl text-center h-12 mt-6  bg-blue-500 rounded'>Fantasy</h1>
                </Link>
                <Link to='http://localhost:5173/category/Adventure'  className='flex flex-col'>
                    <img className='h-96 transition-transform duration-300 transform hover:scale-110' src="https://th.bing.com/th/id/OIP.M7lAD82M2Rj8nI9BZEuHjQHaLH?rs=1&pid=ImgDetMain" alt="" />
                    <h1 className='text-3xl text-center h-12 mt-6  bg-blue-500 rounded'>Adventure</h1>
                </Link>
                <Link to='http://localhost:5173/category/Historical'  className='flex flex-col'>
                    <img className='h-96 transition-transform duration-300 transform hover:scale-110' src="https://th.bing.com/th/id/OIP.7ky-UrS4KTsOaoTZzHW7AAAAAA?rs=1&pid=ImgDetMain" alt="" />
                    <h1 className='text-3xl text-center h-12 mt-6  bg-blue-500 rounded'>Historical Fiction</h1>
                </Link>
                <Link to='http://localhost:5173/category/Gothic'  className='flex flex-col'>
                    <img className='h-96 transition-transform duration-300 transform hover:scale-110' src="https://th.bing.com/th/id/R.cdc3cc896c10f50329e1c920ffb6bcf6?rik=%2b6J8hwU3fUPJMA&pid=ImgRaw&r=0" alt="" />
                    <h1 className='text-3xl text-center h-12 mt-6  bg-blue-500 rounded'>Gothic</h1>
                </Link>
                <Link to='http://localhost:5173/category/Science'   className='flex flex-col'>
                    <img className='h-96 transition-transform duration-300 transform hover:scale-110' src="https://th.bing.com/th/id/R.876f340e9022f81cbaa26930e7120564?rik=YvHB%2b3xb0kp7fQ&pid=ImgRaw&r=0" alt="" />
                    <h1 className='text-3xl text-center h-12 mt-6  bg-blue-500 rounded'>Science</h1>
                </Link>
                <Link to='http://localhost:5173/category/Psychological'  className='flex flex-col'>
                    <img className='h-96 transition-transform duration-300 transform hover:scale-110' src="https://th.bing.com/th/id/R.99f43bbe900ce2273d18fc86c340af69?rik=nNA1iRkTDqwwYw&pid=ImgRaw&r=0" alt="" />
                    <h1 className='text-3xl text-center h-12 mt-6  bg-blue-500 rounded'>Psychological</h1>
                </Link>
                <Link to='http://localhost:5173/category/Magical'  className='flex flex-col'>
                    <img className='h-96 transition-transform duration-300 transform hover:scale-110' src="https://th.bing.com/th/id/R.3e15c08e9377cfbd1532656fa0b87b92?rik=OM%2br3ITXPj0pCw&pid=ImgRaw&r=0" alt="" />
                    <h1 className='text-3xl text-center h-12 mt-6  bg-blue-500 rounded'>Magical</h1>
                </Link>
            </div>
        </div>
    );
};

export default Category;