import { Environment } from '../environment/environment';
import { Language } from '../language/language';
import { Divider, Navbar } from './divider';

type HeroProps = {
  userInfo: any;
};

const username: string = 'John Doe';
const Hero = ({ userInfo }: HeroProps) => {
  return (
    <div className="static w-full h-full lg:w-4/5 lg:flex lg:flex-col lg:justify-between border shadow-inner shadow-gray-700 overflow-hidden">
      <Navbar username={userInfo ? userInfo.name : username} />
      <Language />
      <Divider username={userInfo ? userInfo.name : username} />
      <Environment userInfo={userInfo}/>
    </div>
  );
};

export default Hero;
