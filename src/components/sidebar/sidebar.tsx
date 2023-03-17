import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialTwitter,
} from 'react-icons/sl';
import { FcQuestions } from 'react-icons/fc';
import { TiTickOutline } from 'react-icons/ti';
import { TfiLayoutListThumb } from 'react-icons/tfi';
import { MdOutlineCreateNewFolder } from 'react-icons/md';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const username = 'johndoe';
const avatar = 'https://avatars.githubusercontent.com/u/89572392?v=4';
const description =
  'Only 8 words max limit is applied to the desasdasdasdasdasdasdascription. and more than that will be truncated.';
const words = description.split(' ').slice(0, 8);
const truncatedDesc = words.join(' ');

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div
      className={`fixed z-50 h-full bg-black text-white w-full lg:w-1/5 lg:static lg:h-auto lg:flex-col lg:flex border-4 border-green-500 border-solid lg:justify-between ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      {/* for mobile screen */}
      <div className="flex justify-between items-center lg:hidden">
        <h1 className="text-xl font-semibold px-4 py-3">My Sidebar</h1>
        <button
          title="sidebar"
          className="focus:outline-none px-4 py-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-6 h-6 text-red-500 hover:text-green-500 transition duration-150 ease-in-out" />
        </button>
      </div>
      {/* for mobile screen */}
      {/* For lg screen */}
      <div className="flex-col lg:flex-grow lg:h-auto rounded-r-lg px-1 py-0.5">
        {/* profile-section */}
        <div
          id="profile-section"
          className="flex flex-col h-5/12 items-center py-2 text-green-500"
        >
          <Image
            src={avatar}
            alt="Avatar"
            width={100}
            height={100}
            className="rounded-full border-2 border-solid border-red-600"
          />
          <h1 className="text-sm mt-0.5 text-center font-semibold">
            {username}
          </h1>
          <p className="mb-0.5 text-xs text-center truncate w-full px-1">
            {truncatedDesc}
          </p>
          <div
            id="user-social-icons"
            className="mt-0.5 w-full px-8 flex flex-row space-x-4 justify-between items-center border-2 border-purple-500 border-solid rounded-lg p-1"
          >
            <Link href={'#github'}>
              <SlSocialGithub className="w-5 h-5 text-white hover:text-red-500 transition duration-150 ease-in-out" />
            </Link>
            <Link href={'#linkedin'}>
              <SlSocialLinkedin className="w-5 h-5 text-white hover:text-red-500 transition duration-150 ease-in-out" />
            </Link>
            <Link href={'#twitter'}>
              <SlSocialTwitter className="w-5 h-5 text-white hover:text-red-500 transition duration-150 ease-in-out" />
            </Link>
          </div>
        </div>
        {/* profile-section */}
        {/* project-section */}
        <div
          id="project-section"
          className="flex flex-col h-5/12 my-2 space-y-2"
        >
          <div
            id="project-list"
            className="w-full px-8 flex flex-row space-x-4 justify-between items-center border-2 border-green-500 border-solid rounded-lg p-0.5"
          >
            <Link
              href={'#list'}
              className="flex flex-row space-x-2 items-center justify-center text-center"
            >
              <TfiLayoutListThumb className="w-4 h-4 text-white hover:text-red-500 transition duration-150 ease-in-out" />{' '}
              <span className="text-pink-500 text-xs pl-4">Project List</span>
            </Link>
          </div>
          <div
            id="create-new-project"
            className="w-full px-8 flex flex-row space-x-4 justify-between items-center border-2 border-green-500 border-solid rounded-lg p-0.5"
          >
            <Link
              href={'#create'}
              className="flex flex-row justify-between items-center"
            >
              <MdOutlineCreateNewFolder className="w-4 h-4 text-white hover:text-red-500 transition duration-150 ease-in-out" />{' '}
              <span className="text-blue-500 text-xs pl-3">Create Project</span>
            </Link>
          </div>
        </div>
        {/* project-section */}
        {/* question-section */}
        <div
          id="question-section"
          className="flex flex-col h-5/12 my-2 space-y-2"
        >
          <div
            id="attempted-question-list"
            className="w-full px-8 flex flex-row space-x-4 justify-between items-center border-2 border-green-500 border-solid rounded-lg p-0.5"
          >
            <Link
              href={'#questions-attempted'}
              className="flex flex-row justify-between items-center"
            >
              <TiTickOutline className="w-4 h-4 text-white hover:text-red-500 transition duration-150 ease-in-out" />{' '}
              <span className="text-purple-500 text-xs pl-2">
                Attempted Quest.
              </span>
            </Link>
          </div>
          <div
            id="practice-new-question"
            className="mt-0.5 w-full px-8 flex flex-row space-x-4 justify-between items-center border-2 border-green-500 border-solid rounded-lg p-0.5"
          >
            <Link
              href={'#practice'}
              className="flex flex-row justify-between items-center"
            >
              <FcQuestions className="w-4 h-4 text-white hover:text-red-500 transition duration-150 ease-in-out" />{' '}
              <span className="text-red-500 text-xs pl-3">Practice Quest.</span>
            </Link>
          </div>
        </div>
        {/* question-section */}
        {/* sidebar-footer-section */}
        <div
          id="sidebar-footer-section"
          className="flex flex-col h-max-2/12 mt-0.5 items-center justify-center p-1"
        >
          <div className="flex flex-row justify-center items-center space-x-4">
            <Image
              src={avatar}
              alt="logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-solid border-red-600"
            />
            <p className="text-xs text-center mt-1 text-green-500">
              IDE <br /> @mstomar698
            </p>
          </div>
          <div
            id="footer-social-icons"
            className="my-2 w-full px-8 flex flex-row space-x-4 justify-between items-center border-2 border-red-500 border-solid rounded-lg p-1"
          >
            <Link href={'#github'}>
              <SlSocialGithub className="w-5 h-5 text-white hover:text-red-500 transition duration-150 ease-in-out" />
            </Link>
            <Link href={'#linkedin'}>
              <SlSocialLinkedin className="w-5 h-5 text-white hover:text-red-500 transition duration-150 ease-in-out" />
            </Link>
            <Link href={'#twitter'}>
              <SlSocialTwitter className="w-5 h-5 text-white hover:text-red-500 transition duration-150 ease-in-out" />
            </Link>
          </div>
        </div>
        {/* sidebar-footer-section */}
      </div>
      {/* For lg screen */}
    </div>
  );
};

export default Sidebar;
