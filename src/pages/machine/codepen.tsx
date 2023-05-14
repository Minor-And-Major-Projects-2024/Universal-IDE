import { useRouter } from 'next/router';
import '../../styles/globals.css';

const Codepen = () => {
  const router = useRouter();

  const homeClick = () => {
    router.push('/');
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden">
      <button
        className="absolute top-2 rounded-md right-10 h-max p-2 w-max bg-violet-800 z-20"
        onClick={() => homeClick()}
      >
        Home
      </button>
      <iframe
        title="codepen"
        src="https://create-react-app-functions-vdppx6my2.vercel.app/"
        className="w-full h-full"
      />
    </div>
  );
};

export default Codepen;
