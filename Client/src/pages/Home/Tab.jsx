import React, { useState } from 'react';
import BookCard from '../../components/BookCard';
import TableRow from '../../components/TableRow';
import CategoryCard from '../../components/CategoryCard';

const Tabs = ({ loadedData }) => {
  const [activeTab, setActiveTab] = useState('Grid');
  // console.log(loadedData)
  const display = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="container flex flex-col justify-center items-center mb-5 mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">All Books</h2>
        <p>Tabs are perfect for single page web applications, or for web pages capable of displaying different subjects. Click on the links below.</p>
      </div>

      {/* Select dropdown for tabs */}
      <div className="flex  justify-center ">
        <select value={activeTab} onChange={(e) => display(e.target.value)} className="text-white bg-blue-700 px-4 py-2 h-24 w-40 text-center border-none rounded-3xl mb-10">
          <option className='text-xl w-28 text-center p-3' value="Grid">Card view</option>
          <option  className='text-xl  w-28 text-center' value="Table">Table view</option>
        </select>
      </div>

      <div className='w-11/12 m-auto flex flex-col justify-center items-center border rounded-md'>
        <div id="Grid" className={`container p-4 ${activeTab === 'Grid' ? 'block' : 'hidden'}`}>
          <div className='flex flex-col justify-center items-center mt-5 mb-8'>
              <h2 className="text-2xl font-bold">Cards</h2>
              <p>This is Card view</p>
          </div>
  
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
              loadedData.map((data) => <CategoryCard key={data?._id} data={data}></CategoryCard>)
            }
          </div>
        </div>

        <div id="Table" className={`container p-4 ${activeTab === 'Table' ? 'block' : 'hidden'}`}>
        <div className='flex flex-col justify-center items-center mt-5 mb-8'>
              <h2 className="text-2xl font-bold">Table</h2>
              <p>This is Table view</p>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Book name</th>
                    <th>Writer</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    loadedData.map((data)=><TableRow key={data._id} data={data}></TableRow>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
