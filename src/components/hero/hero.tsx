import { Environment } from '../environment/environment';
import { Language } from '../language/language';

const Hero = () => {
  return (
    <div className="flex flex-col w-full lg:w-4/5  border-4 border-pink-600 border-solid px-1">
      <div className="h-3/6 w-full my-0.5 overflow-hidden overflow-y-auto border-2 border-solid border-orange-500 ">
        <h1 className="text-xl text-start mx-4 px-2 font-semibold text-purple-600">
          Choose language for IDE to work with
        </h1>
        <Language />
      </div>
      <div className="h-3/6 w-full my-0.5 border-2 border-solid border-yellow-300">
        <h1 className="text-xl text-start mx-4 p-2 font-semibold text-purple-600">
          Create your own virtaul environment using
        </h1>
        <Environment />
      </div>
    </div>
  );
};

export default Hero;
