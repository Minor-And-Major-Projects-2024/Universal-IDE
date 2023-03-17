'use client';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Footer } from '../footer/footer';
import Hero from '../hero/hero';
import { Navbar } from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black overflow-hidden h-screen">
      <Navbar />
      {/* main-section */}
      <div className="mx-2 h-[427.467px] flex flex-col lg:flex-row overflow-hidden rounded-lg text-xl text-red-600 border-4 bg-black border-solid border-purple-600">
        {/* Profile-SideBar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* Profile-SideBar */}
        {/* Hero-section */}
        <Hero />
        <button
          title="sidebar"
          className={`fixed bottom-0 right-0 z-50 block lg:hidden focus:outline-none ${
            isOpen ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-6 h-6 m-4" />
        </button>
        {/* Hero-section */}
      </div>
      {/* main-section */}
      <Footer />
    </div>
  );
};

export default Homepage;
