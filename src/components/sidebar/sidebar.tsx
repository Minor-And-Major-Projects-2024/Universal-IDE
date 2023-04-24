import { RxCross1 } from 'react-icons/rx';
import ProfileSection from './profileSection';
import FooterSection from './footerSection';
import OptionSection from './optionSection';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: any;
}

const username: string = 'john doe';
const avatar: string = 'https://avatars.githubusercontent.com/u/101614183?v=4';
const description =
  'Only 8 words max limit is applied to the desasdasdasdasdasdasdascription. and more than that will be truncated.';
const words = description.split(' ').slice(0, 8);
const truncatedDesc: string = words.join(' ');

const Sidebar = ({ isOpen, setIsOpen, userInfo }: SidebarProps) => {
  return (
    <div
      className={`static w-full h-full lg:w-1/5 lg:flex lg:flex-col lg:justify-between border shadow-inner shadow-gray-700 overflow-y-scroll ${
        isOpen
          ? 'bg-[#050816] h-screen fixed top-0 left-0 overflow-hidden flex flex-col md:px-20 sm:px-8 max-sm:px-12 scroll_body justify-around'
          : 'hidden'
      }`}
    >
      {/* for below-medium screen */}
      <div className="flex flex-wrap justify-between items-center lg:hidden">
        <h1 className="text-3xl font-semibold px-4 py-3 text-white">IDE</h1>
        <button
          title="sidebar"
          type="button"
          className="focus:outline-none px-4 py-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RxCross1 className="w-8 h-8 text-white transition duration-150 ease-in-out" />
        </button>
      </div>
      {/* for below-medium screen */}

      {/* for large screen */}
      <ProfileSection
        avatar={avatar}
        truncatedDesc={truncatedDesc}
        userInfo={userInfo}
      />
      <OptionSection userInfo={userInfo} />
      <FooterSection avatar={avatar} />
      {/* for large screen */}
    </div>
  );
};

export default Sidebar;
