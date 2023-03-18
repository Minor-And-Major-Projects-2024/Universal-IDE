'use client';
import { useState } from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { Footer } from '../footer/footer';
import Hero from '../hero/hero';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = 'john doe';
  const avatar = 'https://avatars.githubusercontent.com/u/101614183?v=4';
  return (
    <div className="bg-black h-screen max-sm:h-full overflow-hidden max-sm:overflow-visible">
      <Navbar username={username} avatar={avatar} />
      {/* main-section */}
      <div className="mx-2 flex flex-col lg:flex-row rounded-lg text-xl text-red-600 ">
        {/*FOR_DEVELOMENT h-[427.467px] max-sm:h-full overflow-hidden overflow-hidden */}
        {/* Profile-SideBar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* Profile-SideBar */}
        {/* Hero-section */}
        <Hero />
        <button
          title="sidebar"
          className={`fixed top-2/4 h-16 border-2 rounded-r-lg border-solid border-green-500 w-5 left-0  z-50 block lg:hidden focus:outline-none ${
            isOpen ? 'bg-white hidden' : 'bg-black'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsArrowBarRight className="w-4 h-8 font-semibold text-red-500" />
        </button>
        {/* Hero-section */}
      </div>
      {/* main-section */}
      <Footer />
    </div>
  );
};

export default Homepage;
