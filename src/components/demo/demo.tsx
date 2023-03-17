'use client';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div
      className={`fixed z-50 h-screen bg-gray-900 text-white w-full lg:w-2/5 border-r-4 lg:border-r-0 lg:static lg:h-auto lg:text-black lg:bg-white lg:shadow-none lg:flex-col lg:flex lg:justify-between ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="flex justify-between items-center lg:hidden">
        <h1 className="text-xl font-semibold px-4 py-3">My Sidebar</h1>
        {/* <button
          title="sidebar"
          className="focus:outline-none px-4 py-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-6 h-6 text-gray-400 hover:text-white transition duration-150 ease-in-out" />
        </button> */}
      </div>
      <div className="flex-col lg:flex-grow lg:h-auto lg:overflow-y-auto">
        <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white">
          Link 1
        </a>
        <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white">
          Link 2
        </a>
        <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white">
          Link 3
        </a>
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div className="flex flex-col w-full lg:w-3/5 h-screen border-l-4 bg-gray-800 text-white px-6 py-4">
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
        pulvinar odio, eget tristique ex. Integer eu ipsum ultrices, vehicula
        massa ut, vehicula ante. Sed euismod lectus in diam ultricies, vel
        fringilla leo euismod. Nullam non pharetra turpis, eu bibendum velit.
        Morbi euismod efficitur ultrices. Aenean ullamcorper sapien vitae augue
        bibendum lacinia.
      </p>
    </div>
  );
};

export const Demo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Container />
      <button
        title="sidebar"
        className={`fixed bottom-0 right-0 z-50 block lg:hidden focus:outline-none ${
          isOpen ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu className="w-6 h-6 m-4" />
      </button>
    </div>
  );
};
