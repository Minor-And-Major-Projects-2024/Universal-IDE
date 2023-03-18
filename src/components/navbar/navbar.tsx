import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiLogoutBoxRLine, RiLoginBoxLine } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import { GiArchiveRegister, GiSettingsKnobs } from 'react-icons/gi';
import { BiUser } from 'react-icons/bi';

const Navbar = ({ username, avatar }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPromtOpen, setIsPromtOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="mb-1 mx-2 max-sm:px-2 text-3xl text-purple-500 text-center rounded-lg border-2 border-solid border-green-500  flex items-center justify-between px-1">
      {/* main-navbar-heading */}
      <div className="flex items-center">
        <Link href="/">
          <p className="text-lg max-sm:text-sm max-sm:font-semibold font-bold mx-1">
            IDE-{username}
          </p>
        </Link>
      </div>
      {/* lg-navbar-controls */}
      <div className="hidden md:flex flex-row justify-between w-1/5 items-center space-x-1 px-1 py-0.5 rounded-lg">
        <Link href="/auth/signup">
          <button
            title="signup"
            type="submit"
            className="border-2 rounded-lg px-1 border-solid border-red-500 flex flex-row items-center space-x-0.5"
          >
            <span className="text-sm">Signup</span>
            <GiArchiveRegister
              className="inline-block text-green-500"
              size={10}
            />
          </button>
        </Link>
        <Link href="/auth/signin">
          <button
            title="signin"
            type="submit"
            className="border-2 rounded-lg px-1 border-solid border-red-500 flex flex-row items-center space-x-0.5"
          >
            <span className="text-sm">Signin</span>
            <RiLoginBoxLine className="inline-block text-green-500" size={10} />
          </button>
        </Link>
        <Image
          className="h-6 w-6 rounded-full border-solid border-red-500 border-2"
          src={avatar}
          alt="Avatar"
          width={32}
          height={32}
          onClick={() => setIsPromtOpen(!isPromtOpen)}
        />
      </div>
      {/* mobile-navbar-controls */}
      <div className="md:hidden text-red-500 items-center justify-center h-full text-center mt-1">
        <button
          title="toggle-menu"
          type="submit"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu size={25} />
        </button>
      </div>
      {/* dropdown-controls */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black">
          <div className="flex flex-col justify-center h-full items-center text-center space-y-2">
            <Link href="/">
              <button
                title="home"
                type="submit"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <RxCross1 className="inline-block text-red-500 " size={30} />
              </button>
            </Link>
            <Link href="/auth/signup">
              <button
                title="signup"
                type="submit"
                className="border-2 rounded-lg p-2 border-solid border-red-500 flex flex-row items-center space-x-1"
              >
                <span className="text-lg">Signup</span>
                <GiArchiveRegister
                  className="inline-block text-green-500"
                  size={20}
                />
              </button>
            </Link>
            <Link href="/auth/signin">
              <button
                title="signin"
                type="submit"
                className="border-2 rounded-lg p-2 border-solid border-red-500 flex flex-row items-center space-x-1"
              >
                <span className="text-lg">Signin</span>
                <RiLoginBoxLine
                  className="inline-block text-green-500"
                  size={25}
                />
              </button>
            </Link>
            {/* navabr-user-controls */}
            {isLoggedIn ? (
              <>
                <Link href="/user/userprofile">
                  <button
                    title="user-prfile"
                    type="submit"
                    className="border-2 rounded-lg p-2 border-solid border-indigo-500 flex flex-row items-center space-x-1"
                  >
                    <span className="text-lg text-green-500">{username}</span>
                    <BiUser className="inline-block text-red-500" size={20} />
                  </button>
                </Link>
                <Link href="/user/accountsettings">
                  <button
                    title="settings"
                    type="submit"
                    className="border-2 rounded-lg p-2 border-solid border-indigo-500 flex flex-row items-center space-x-1"
                  >
                    <span className="text-lg text-green-500">Settings</span>
                    <GiSettingsKnobs
                      className="inline-block text-red-500"
                      size={20}
                    />
                  </button>
                </Link>
                <Link href="/">
                  <button
                    title="logout"
                    type="submit"
                    onClick={() => setIsLoggedIn(false)}
                    className="border-2 rounded-lg p-2 border-solid border-indigo-500 flex flex-row items-center space-x-1"
                  >
                    <span className="text-lg text-green-500">Logout</span>
                    <RiLogoutBoxRLine
                      className="inline-block text-red-500"
                      size={20}
                    />
                  </button>
                </Link>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
      {/* prompt-comtrols */}
      {isPromtOpen && isLoggedIn && (
        <>
          <div className="absolute top-9 right-4 w-[200px] bg-black rounded-lg border-solid border-4 border-red-500 p-4  h-[200px] ">
            {isLoggedIn ? (
              <div className="flex flex-col text-center items-center justify-center space-y-2">
                <Link href="/#userprofile">
                  <button
                    title="user-prfile"
                    type="submit"
                    className="border-2 rounded-lg p-2 border-solid border-indigo-500 flex flex-row items-center space-x-1"
                  >
                    <span className="text-lg text-green-500">{username}</span>
                    <BiUser className="inline-block text-red-500" size={20} />
                  </button>
                </Link>
                <Link href="/#accountsettings">
                  <button
                    title="settings"
                    type="submit"
                    className="border-2 rounded-lg p-2 border-solid border-indigo-500 flex flex-row items-center space-x-1"
                  >
                    <span className="text-lg text-green-500">Settings</span>
                    <GiSettingsKnobs
                      className="inline-block text-red-500"
                      size={20}
                    />
                  </button>
                </Link>
                <Link href="/">
                  <button
                    title="logout"
                    type="submit"
                    onClick={() => setIsLoggedIn(false)}
                    className="border-2 rounded-lg p-2 border-solid border-indigo-500 flex flex-row items-center space-x-1"
                  >
                    <span className="text-lg text-green-500">Logout</span>
                    <RiLogoutBoxRLine
                      className="inline-block text-red-500"
                      size={20}
                    />
                  </button>
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
