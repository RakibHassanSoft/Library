import React from 'react';
import Hero from './Hero/Hero';
import Tab from './Tab';
import BookCard from '../../components/BookCard';
import AddBook from '../AddBook/AddBook';
import FourTab from './FourTab.jsx';
import Category from '../Category/Category.jsx';
import Contract from './Contract.jsx';


const Home = () => {
    return (
      <div>
         <div className=' m-auto'>
         <Hero></Hero>
        
  
       </div>
        <Category></Category>
        <Contract></Contract>
      </div>
    );
};

export default Home;