import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {

    const { singIN, user, setUserFromDatabase, UserFromDatabsaae,signInByGoogle ,hello} = useContext(AuthContext)
    // console.log(signInByGoogle)
    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();
    const handleSingIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //  console.log(email,password)
        singIN(email, password)
            .then(result => {
                console.log(result.user)
                
                toast.success('Congratulation');
                navigate('/')

            })
            .catch(err => {
                toast.error('Passowrd or email is wrong')
                // console.log(err)
            })
    }

    const handleGoogleLogin = ()=>{
        // signInWithPopup()
        alert("hi")
        // signInByGoogle()
        // .then(resul=>{
        //     console.log(resul)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
        
    }
    return (
        <div className='flex flex-col lg:flex-row justify-between w-11/12 m-auto mt-44'
            style={{
                backgroundImage: `url('https://th.bing.com/th/id/R.18e11d0f8402d0dedc9e7680bf1551eb?rik=%2fgcA%2bWccvy0i8g&pid=ImgRaw&r=0')`,
                backgroundSize: 'cover', // Adjust as needed
                backgroundPosition: 'center', // Adjust as needed
                width: '', // Set width to cover the entire viewport
                height: 'cover', // Set h
            }}
        >
            <div className=' lg:w-1/2 '>
                <div>
                    <h1 className='text-5xl text-center  font-thin pt-10'>Login</h1>
                </div>
                <div>

                </div>
                <form onSubmit={handleSingIn} action="" className=' flex flex-col m-10 bg-black bg-opacity-25 p-10 rounded-lg'>
                    <div className='w-full'>
                        <label htmlFor="" className='text-white text-2xl'>Email</label><br />
                        <input name='email' type="email" className='w-full h-12 rounded-md text-xl ' /> <br />
                    </div>
                    <div>
                        <label htmlFor="" className='text-white text-2xl'>Password</label><br />
                        <input name='password' type="password" className='w-full h-12 rounded-md text-xl' />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <button className='text-white bg-black bg-opacity-20 h-12 text-xl w-28 rounded-lg'> Login</button>

                    </div>

                    <div className="divider">OR</div>

                    <div onClick={handleGoogleLogin} className='btn flex justify-center gap-4 items-center bg-white bg-opacity-50  m-auto rounded-lg '>
                        <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z" /><path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z" /><path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z" /><path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z" /></svg>
                        <h1 className='h-10  text-white font-bold text-2xl'>Login by google</h1>
                    </div>
                    <div className='btn mt-4 flex justify-center gap-4 items-center bg-white bg-opacity-50  m-auto rounded-lg '>

                        <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z" /><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z" /></svg>
                        <h1 className='h-10  text-white font-bold text-2xl'>Login by Facebook</h1>
                    </div>
                </form>
            </div>
            <div className='w-full lg:w-1/2'>
                <img src="https://th.bing.com/th/id/R.ec7f0c197b6cf1bd56f5a56abcb8ef1b?rik=3kJDzy2A38AJFg&pid=ImgRaw&r=0" className='w-full h-full' alt="sdfdsfdsf" />
            </div>


        </div>
    );
};

export default Login;



//ctrl shift f 