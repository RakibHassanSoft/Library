import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';
import BookCard from '../../components/BookCard';
import CategoryCard from '../../components/CategoryCard';

const FindCategory = () => {
    const { UserFromDatabsaae } = useContext(AuthContext)
    // console.log(UserFromDatabsaae)

    const loadedData = useLoaderData();
    // console.log(loadedData);

    const { category } = useParams();
    // console.log(category);

    const datas= loadedData.filter((d) => d.category === category);
    // console.log(datas);
    return (
        <div className='w-8/12 m-auto'>
        
            <h1 className='mt-44 mb-10 text-5xl text-center '> {category}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
               {
                datas.length>1 && datas.map((data)=><CategoryCard key={data?._id} data={data}></CategoryCard>)
               }
            </div>
            <div className='w-1/4 m-auto'>
               {
                datas.length==1 && datas.map((data)=><CategoryCard key={data?._id} data={data}></CategoryCard>)
               }
            </div>
        </div>
    );
};

export default FindCategory;