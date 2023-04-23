import Link from 'next/link';
import { FcQuestions } from 'react-icons/fc';
import { GiArchiveRegister } from 'react-icons/gi';
import { MdOutlineCreateNewFolder } from 'react-icons/md';
import { RiLoginBoxLine } from 'react-icons/ri';
import { TfiLayoutListThumb } from 'react-icons/tfi';
import { TiTickOutline } from 'react-icons/ti';

interface OptionSectionProps {}

const OptionSection = ({}: OptionSectionProps) => {
  return (
    <div className="flex flex-col space-y-4 items-center py-2 px-4">
      <div className="w-full p-0.5 py-2 px-8 space-x-4 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
        <Link
          href={'/projects/projectlist'}
          className="flex flex-row space-x-2 items-center justify-center text-center"
        >
          <TfiLayoutListThumb className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
          <span className="text-white text-xl pl-4">Project List</span>
        </Link>
      </div>
      <div className="w-full p-0.5 py-2 px-8 space-x-4 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
        <Link
          href={'/projects/projectlist'}
          className="flex flex-row justify-between items-center"
        >
          <MdOutlineCreateNewFolder className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
          <span className="text-white text-xl pl-3">Create Project</span>
        </Link>
      </div>
      <div className="w-full p-0.5 py-2 px-8 space-x-4 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
        <Link
          href={'/questions/completedquest'}
          className="flex flex-row justify-between items-center"
        >
          <TiTickOutline className="w-6 h-6 text-white hover:text-red-500 transition duration-150 ease-in-out" />{' '}
          <span className="text-white text-xl pl-2">Attempted Quest.</span>
        </Link>
      </div>
      <div className="w-full p-0.5 py-2 px-8 space-x-4 flex flex-row justify-between items-center bg-[#1d1836] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
        <Link
          href={'/questions/practicequestions'}
          className="flex flex-row justify-between items-center"
        >
          <FcQuestions className="w-6 h-6 text-white transition duration-150 ease-in-out" />{' '}
          <span className="text-white text-xl pl-3">Practice Quest.</span>
        </Link>
      </div>
      <div className="w-full p-0.5 py-2 px-8 space-x-4 flex flex-row justify-between items-center bg-[#312a56] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
        <Link
          href="/auth/signup"
          className="flex flex-row justify-between items-center"
        >
          <GiArchiveRegister className="w-6 h-6 text-white transition duration-150 ease-in-out" />
          <span className="text-white text-xl pl-4">Signup</span>
        </Link>
      </div>
      <div className="w-full p-0.5 py-2 px-8 space-x-4 flex flex-row justify-between items-center bg-[#312a56] border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
        <Link
          href="/auth/signin"
          className="flex flex-row justify-between items-center"
        >
          <RiLoginBoxLine className="w-6 h-6 text-white transition duration-150 ease-in-out" />
          <span className="text-white text-xl pl-4">Signin</span>
        </Link>
      </div>
    </div>
  );
};

export default OptionSection;
