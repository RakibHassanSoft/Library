import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tabs from '../Home/Tab';
import AuthProvider, { AuthContext } from '../../Provider/AuthProvider';

const AllBookes = () => {
    const loadedData = useLoaderData();
    // console.log(loadedData)

    // const {UserFromDatabsaae} = useContext(AuthContext)
    // console.log(UserFromDatabsaae)
    return (
        <div className='mt-44'>

            <Tabs loadedData={loadedData}></Tabs>
        </div>
    );
};

export default AllBookes;