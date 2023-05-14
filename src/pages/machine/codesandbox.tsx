import { useRouter } from 'next/router';
import React from 'react';
import '../../styles/globals.css';

const Codesandbox = () => {
  const router = useRouter();

  const homeClick = () => {
    router.push('/');
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black">
      <button
        className="absolute top-2 rounded-md right-10 h-max p-2 w-max bg-violet-800 z-20"
        onClick={() => homeClick()}
      >
        Home
      </button>
      <iframe
        title="codesandbox"
        className="w-full h-full border-0"
        src="https://codesandbox.io/embed/crazy-kepler-9cb5d3"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Codesandbox;
