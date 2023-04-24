import Image from 'next/image';
import Link from 'next/link';
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialTwitter,
} from 'react-icons/sl';

interface ProfileSectionProps {
  avatar: string;
  username: string;
  truncatedDesc: string;
}

const ProfileSection = ({
  avatar,
  username,
  truncatedDesc,
}: ProfileSectionProps) => {
  return (
    <div className="flex flex-col space-y-2 items-center py-2 px-4 ">
      <Image
        src={avatar}
        alt="Avatar"
        width={100}
        height={100}
        className="rounded-full border-2 border-solid border-[#915EFF] hover:shadow-2xl hover:shadow-[#915EFF]"
      />
      <span className="text-sm text-center font-semibold text-white">
        {username}
      </span>
      <span className="text-xs text-center truncate w-full text-white/80">
        {truncatedDesc}
      </span>
      <div
        id="user-social-icons"
        className="flex flex-wrap w-full p-1 px-8 py-4 space-x-4 justify-between items-center bg-[#1d1836] border rounded-lg"
      >
        <Link href={'#github'}>
          <SlSocialGithub className="w-6 h-6 text-white transition duration-150 ease-in-out hover:shadow-xl hover:shadow-[#915EFF]" />
        </Link>
        <Link href={'#linkedin'}>
          <SlSocialLinkedin className="w-6 h-65 text-white transition duration-150 ease-in-out hover:shadow-xl hover:shadow-[#915EFF]" />
        </Link>
        <Link href={'#twitter'}>
          <SlSocialTwitter className="w-6 h-6 text-white transition duration-150 ease-in-out hover:shadow-xl hover:shadow-[#915EFF]" />
        </Link>
      </div>
    </div>
  );
};

export default ProfileSection;
