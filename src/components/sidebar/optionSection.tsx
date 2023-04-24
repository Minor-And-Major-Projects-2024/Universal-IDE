'use client';
import Link from 'next/link';
import { Store } from '@/store';
import { Router } from 'next/router';
import { useContext } from 'react';
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
    window.location.href = '/';
  };
  return (
    <div className="flex flex-col space-y-2 items-center py-2 px-4 z-10">
      <Link
        href={'/questions/practicequestions'}
        className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]"
      >
        <div className="flex flex-row space-x-2 items-center justify-center text-center">
          <FcQuestions className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
          <span className="text-white text-lg px-auto">Practice Quest.</span>
        </div>
      </Link>
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
          <Link
            href={'/user/profile'}
            className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]"
          >
            <div className="flex flex-row space-x-2 items-center justify-center text-center">
              <MdOutlineCreateNewFolder className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
              <span className="text-white text-lg px-auto">Edit Profile</span>
            </div>
          </Link>
          {userInfo.isAdmin && (
            <>
              <Link
                href={'user/admin/users'}
                className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]"
              >
                <div className="flex flex-row space-x-2 items-center justify-center text-center">
                  <MdOutlineCreateNewFolder className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
                  <span className="text-white text-lg px-auto">All Users</span>
                </div>
              </Link>
              <Link
                href={'/user/admin/dashboard'}
                className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]"
              >
                <div className="flex flex-row space-x-2 items-center justify-center text-center">
                  <MdOutlineCreateNewFolder className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
                  <span className="text-white text-lg px-auto">DashBoard</span>
                </div>
              </Link>
            </>
          )}
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
          <Link
            href="/auth/signin"
            className="w-full p-0.5 py-1 px-8 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]"
          >
            <div className="flex flex-row space-x-2 items-center justify-center text-center">
              <RiLoginBoxLine className="w-6 h-6 text-white transition duration-150 ease-in-out" />
              <span className="text-white text-lg px-auto">Signin</span>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default OptionSection;
