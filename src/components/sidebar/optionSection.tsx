'use client'
import Link from 'next/link';
import { Store } from '@/store';
import { Router } from 'next/router';
import {useContext} from 'react'
import { FcQuestions } from 'react-icons/fc';
import { GiArchiveRegister } from 'react-icons/gi';
import { MdOutlineCreateNewFolder } from 'react-icons/md';
import { RiLoginBoxLine } from 'react-icons/ri';
import { TfiLayoutListThumb } from 'react-icons/tfi';
import { TiTickOutline } from 'react-icons/ti';

interface OptionSectionProps {
  userInfo: any;
}

const OptionSection = ({ userInfo }: OptionSectionProps) => {
  const { dispatch: ctxDispatch } = useContext(Store);
  const signoutHandler = () => {
  
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    window.location.href = "/";
  };
  return (
    <div className="flex flex-col space-y-2 items-center py-2 px-4 z-10">
      {/* <div className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
        <Link
          href={'/projects/projectlist'}
          className="flex flex-row space-x-2 items-center justify-center text-center"
        >
          <MdOutlineCreateNewFolder className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
          <span className="text-white text-lg px-auto">Create Project</span>
        </Link>
      </div>
      <div className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
        <Link
          href={'/projects/projectlist'}
          className="flex flex-row space-x-2 items-center justify-center text-center"
        >
          <TfiLayoutListThumb className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
          <span className="text-white text-lg px-auto">Project List</span>
        </Link>
      </div> */}
      <div className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
        <Link
          href={'/questions/practicequestions'}
          className="flex flex-row space-x-2 items-center justify-center text-center"
        >
          <FcQuestions className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
          <span className="text-white text-lg px-auto">Practice Quest.</span>
        </Link>
      </div>
      {/* <div className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
        <Link
          href="/auth/signup"
          className="flex flex-row space-x-2 items-center justify-center text-center"
        >
          <GiArchiveRegister className="w-6 h-6 text-white transition duration-150 ease-in-out" />
          <span className="text-white text-lg px-auto">Signup</span>
        </Link>
      </div> */}
      {userInfo ? (
        <>
          <div className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
            <Link
              href={'/profile'}
              className="flex flex-row space-x-2 items-center justify-center text-center"
            >
              <MdOutlineCreateNewFolder className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
              <span className="text-white text-lg px-auto">Edit Profile</span>
            </Link>
          </div>
          {userInfo.isAdmin && (<>
          <div className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
            <Link
              href={'/admin/users'}
              className="flex flex-row space-x-2 items-center justify-center text-center"
            >
              <MdOutlineCreateNewFolder className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
              <span className="text-white text-lg px-auto">All Users</span>
            </Link>
          </div>
          <div className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
            <Link
              href={'/admin/dashboard'}
              className="flex flex-row space-x-2 items-center justify-center text-center"
            >
              <MdOutlineCreateNewFolder className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
              <span className="text-white text-lg px-auto">DashBoard</span>
            </Link>
          </div>
          </>)}
          <div className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
            <div
             onClick={signoutHandler}
              className="flex flex-row space-x-2 items-center justify-center text-center"
            >
              <RiLoginBoxLine className="w-6 h-6 text-white transition duration-150 ease-in-out" />
              <span className="text-white text-lg px-auto">SignOut</span>
            </div>
          
          </div>
        </>
      ) : (
        <>
          <div className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
            <Link
              href="/auth/signin"
              className="flex flex-row space-x-2 items-center justify-center text-center"
            >
              <RiLoginBoxLine className="w-6 h-6 text-white transition duration-150 ease-in-out" />
              <span className="text-white text-lg px-auto">Signin</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default OptionSection;
