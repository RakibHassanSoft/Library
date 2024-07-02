import React, { useState } from 'react';

const FourTab = () => {
  const [activeTab, setActiveTab] = useState('Grid');

  const display = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Four Tabs</h2>
        <p>Four tabs are perfect for single-page web applications or for web pages capable of displaying different subjects. Click on the links below.</p>
      </div>

      <div className="flex w-1/4 m-auto justify-center bg-black">
        <button className={`text-white px-4 py-2 ${activeTab === 'Grid' ? 'bg-blue-500' : ''}`} onClick={() => display('Grid')}>Novel</button>
        <button className={`text-white px-4 py-2 ${activeTab === 'Table' ? 'bg-blue-500' : ''}`} onClick={() => display('Table')}>Drama</button>
        <button className={`text-white px-4 py-2 ${activeTab === 'List' ? 'bg-blue-500' : ''}`} onClick={() => display('List')}>Sci-Fi</button>
        <button className={`text-white px-4 py-2 ${activeTab === 'Map' ? 'bg-blue-500' : ''}`} onClick={() => display('Map')}>Map</button>
      </div>

      <div className='w-11/12 m-auto flex flex-col justify-center items-center border'>
        <div id="Grid" className={`container p-4 ${activeTab === 'Grid' ? 'block' : 'hidden'}`}>
          <h2 className="text-2xl font-bold">Grid</h2>
          <p>Grid is the capital city of England.</p>
        </div>

        <div id="Table" className={`container p-4 ${activeTab === 'Table' ? 'block' : 'hidden'}`}>
          <h2 className="text-2xl font-bold">Table</h2>
          <p>Table is the capital of France.</p>
        </div>

        <div id="List" className={`container p-4 ${activeTab === 'List' ? 'block' : 'hidden'}`}>
          <h2 className="text-2xl font-bold">List</h2>
          <p>List is the capital of Spain.</p>
        </div>

        <div id="Map" className={`container p-4 ${activeTab === 'Map' ? 'block' : 'hidden'}`}>
          <h2 className="text-2xl font-bold">Map</h2>
          <p>Map is the capital of Italy.</p>
        </div>
      </div>
    </div>
  );
};

export default FourTab;
