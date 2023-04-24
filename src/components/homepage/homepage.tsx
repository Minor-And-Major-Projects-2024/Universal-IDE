'use client';
import { Store } from '@/store';
import React, { useState, useContext } from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import Hero from '../hero/hero';
import Sidebar from '../sidebar/sidebar';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      userInfo: context.req.headers.cookie
        ? JSON.parse(
            context.req.headers.cookie
              .split(';')
              .find((x: any) => x.trim().startsWith('userInfo='))
          ).userInfo
        : null,
    },
  };
}

const Homepage = () => {
  const { state } = useContext(Store);
  const { userInfo }: any = state;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ErrorBoundary>
      <div className="h-full flex flex-col lg:flex-row text-xl text-red-600 ">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} userInfo={userInfo} />
        <Hero userInfo={userInfo} />
        <button
          type="button"
          title="sidebar"
          className={`lg:hidden fixed z-50 block h-16 w-6 top-2/4 left-0 border shadow-inner shadow-gray-700 ${
            isOpen ? 'hidden' : 'bg-[#1d1836]'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsArrowBarRight className="w-4 h-8 font-semibold text-white " />
        </button>
      </div>
    </ErrorBoundary>
  );
};

export default Homepage;
