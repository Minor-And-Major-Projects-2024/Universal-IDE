import { Environment } from '../environment/environment';
import { Language } from '../language/language';

const Hero = () => {
  return (
    <div className="flex flex-col w-full lg:w-4/5 max-sm:border-0 border-0 rounded-lg border-pink-600 border-solid px-1">
      <div className="h-3/6 w-full mb-0.5 overflow-hidden max-sm:p-2 overflow-y-auto border-2 border-solid border-orange-500 rounded-r-lg max-sm:rounded-t-lg">
        <h1 className="text-xl text-start my-2 mx-4 px-2 max-sm:text-sm font-semibold text-purple-600">
          Choose language for IDE to work with
        </h1>
        <Language />
      </div>
      <div className="h-3/6 w-full mt-0.5 border-2 max-sm:rounded-b-lg max-sm:py-2 border-solid border-yellow-300 rounded-r-lg">
        <h1 className="text-xl text-start mx-4 my-1 p-2 max-sm:text-sm font-semibold text-purple-600">
          Create your own virtaul environment using
        </h1>
        <Environment />
      </div>
    </div>
  );
};

export default Hero;
