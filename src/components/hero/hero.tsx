import { Environment } from '../environment/environment';
import { Language } from '../language/language';
import { Divider, Navbar } from './divider';

const username: string = 'john doe';
const Hero = () => {
  return (
    <div className="static w-full h-full lg:w-4/5 lg:flex lg:flex-col lg:justify-between border shadow-inner shadow-gray-700 overflow-hidden">
      <Navbar username={username} />
      <Language />
      <Divider username={username} />
      <Environment />
    </div>
  );
};

export default Hero;
