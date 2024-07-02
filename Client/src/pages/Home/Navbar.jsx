import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
const Navbar = () => {
    const { logOut, user, UserFromDatabsaae } = useContext(AuthContext)
    //  console.log(UserFromDatabsaae)
    const navigate = useNavigate()
    const handleLogout = async () => {

        logOut()
            .then((res) => {
                navigate('/login');
            }) // Call your logout function


    }
    const list = <>
        <div className='group '>
            <Link className='text-black font-bold hover:text-green-600 hover:translate-y-1 relative  hover:duration-300 hover:scale-x-100' to='/'>Home</Link>
            <div className='w-full lg:w-14 h-1 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
        </div>

        {
            user && <>
                <div className='group'>
                    <Link className='text-black font-bold hover:text-green-600 hover:translate-y-1 relative  hover:duration-300 hover:scale-x-100' to='/add-book'>Add Books</Link>
                    <div className='w-full lg:w-26 h-1 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
                </div>
                <div className='group'>
                    <Link className='text-black font-bold hover:text-green-600 hover:translate-y-1 relative  hover:duration-300 hover:scale-x-100' to='/all-book'>All books</Link>
                    <div className='w-full lg:w-22 h-1 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
                </div>
                <div className='group'>
                    <Link className='text-black font-bold hover:text-green-600 hover:translate-y-1 relative  hover:duration-300 hover:scale-x-100' to='/borrowed-book'>Borrowed Books</Link>
                    <div className='w-full lg:w-38 h-1 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
                </div>
            </>
        }




    </>

    // theme related
    // console.log(user,userDb)
    const [theme, setTheme] = useState(("theme") ? localStorage.getItem("theme") : "light");

    const handleTheme = event => {
        if (event.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light")
        }
    }
    useEffect(() => {

        localStorage.setItem("theme", theme);

        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])


    return (
        <div className="navbar fixed z-10 h-28 bg-base-100 border font-serif  text-black dark:text-white:">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user && <>
                                <h1 className='text-center text-3xl text-green-700'>{UserFromDatabsaae?.displayName || user?.displayName}</h1>

                                {/* profile section  */}


                            </>
                        }
                        {list}
                        {
                            user &&
                            <div className='group '>
                                <Link onClick={handleLogout} className='text-black font-bold hover:text-green-600 hover:translate-y-1 hover:duration-300 hover:scale-x-100 relative' to='/'>Logout</Link>
                                <div className='w-22 h-1 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
                            </div>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-5xl"><span className='text-Black'>Lib</span><span className='text-green-600'>rarry</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="flex justify-between gap-10 text-xl">
                    {list}
                </div>
            </div>
            <div className="navbar-end flex gap-4">

                {/*------------------ // dark and light DarkL----------------------- */}
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox"
                        onChange={handleTheme}
                        checked={theme === "light" ? false : true}
                    />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
                {
                    user && <>
                        <h1 className='text-center text-3xl text-green-700 hidden md:block'>{UserFromDatabsaae?.displayName}</h1>

                        {/* profile section  */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={UserFromDatabsaae?.url || user?.photoURL} />
                                </div>
                            </div>


                        </div>
                        {/* logout section  */}

                        <div className='group text-xl'>
                            <Link onClick={handleLogout} className='text-black font-bold hover:text-green-600 hover:translate-y-1 hover:duration-300 hover:scale-x-100 relative' to='/'>Logout</Link>
                            <div className='w-22 h-1 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
                        </div>
                    </>
                }
                {
                    !user && <>
                        <div className='group text-xl'>
                            <Link className='text-black font-bold hover:text-green-600 hover:translate-y-1 relative  hover:duration-300 hover:scale-x-100' to='/login'>Login</Link>
                            <div className='w-full lg:w-14 h-1 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
                        </div>
                        <div className='group text-xl'>
                            <Link className='text-black font-bold hover:text-green-600 hover:translate-y-1 relative  hover:duration-300 hover:scale-x-100' to='/register'>Sign up</Link>
                            <div className='w-full lg:w-18 h-1 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
                        </div>

                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;