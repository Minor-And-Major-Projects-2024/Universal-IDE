'use client';
import { useState } from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import Hero from '../hero/hero';
import Sidebar from '../sidebar/sidebar';
const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full flex flex-col lg:flex-row text-xl text-red-600 ">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <button
        type="button"
        title="sidebar"
        className={`lg:hidden fixed z-50 block h-16 w-6 top-2/4 left-0 border shadow-inner shadow-gray-700 ${
          isOpen ? 'hidden' : 'bg-[#1d1836]'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsArrowBarRight className="w-4 h-8 font-semibold text-white " />
      </button>
    </div>
  );
};

export default Homepage;
