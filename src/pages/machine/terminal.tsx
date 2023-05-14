import '../../styles/globals.css';
import { useRouter } from 'next/router';
const Terminal = () => {
  const router = useRouter();

  const homeClick = () => {
    router.push('/');
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black ">
      <button
        className="absolute top-4 rounded-md right-10 h-max p-2 w-max bg-violet-800 z-20"
        onClick={() => homeClick()}
      >
        Home
      </button>
      <iframe
        title="Terminal"
        src="https://bellard.org/jslinux/vm.html?url=alpine-x86.cfg&mem=192"
        className="w-full h-full border-0"
      ></iframe>
    </div>
  );
};

export default Terminal;
