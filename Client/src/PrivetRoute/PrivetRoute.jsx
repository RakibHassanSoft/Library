import React, {  useContext } from 'react';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location= useLocation()
   //     console.log(location.pathname)
  // console.log(loading)
   if(loading){
  
        return <div className='w-1/2 m-auto'>
            <div className="mt-44 text-center w-44 h-44 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }
    if(user?.email){
        return children
    }
    // return <Navigate state={{from :location}} to='/login' replace></Navigate>
    return <Navigate  to='/login' replace></Navigate>
};

export default PrivetRoute;