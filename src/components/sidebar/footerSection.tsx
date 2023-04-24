import Image from 'next/image';
import Link from 'next/link';
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialTwitter,
} from 'react-icons/sl';

interface FooterSectionProps {
  avatar: string;
}

const FooterSection = ({ avatar }: FooterSectionProps) => {
  return (
    <div className="flex flex-col space-y-2 items-center py-2 px-4">
      <div className="flex flex-row justify-center items-center space-x-4">
        <Image
          src={avatar}
          alt="logo"
          width={46}
          height={46}
          className="rounded-full border-2 border-solid border-[#915EFF] hover:shadow-xl hover:shadow-[#915EFF]"
        />
        <span className="text-xs text-center text-white mt-1">
          IDE <br /> <span className="text-white/80">@mstomar698</span>
        </span>
      </div>
      <div
        id="footer-social-icons"
        className="flex flex-wrap w-full p-1 px-8 py-4 space-x-4 justify-between items-center bg-[#1d1836] border rounded-lg"
      >
        <Link href={'#github'}>
          <SlSocialGithub className="w-5 h-5 text-white hover:shadow-xl hover:shadow-[#915EFF] transition duration-150 ease-in-out" />
        </Link>
        <Link href={'#linkedin'}>
          <SlSocialLinkedin className="w-5 h-5 text-white hover:shadow-xl hover:shadow-[#915EFF] transition duration-150 ease-in-out" />
        </Link>
        <Link href={'#twitter'}>
          <SlSocialTwitter className="w-5 h-5 text-white hover:shadow-xl hover:shadow-[#915EFF] transition duration-150 ease-in-out" />
        </Link>
      </div>
    </div>
  );
};

export default FooterSection;
