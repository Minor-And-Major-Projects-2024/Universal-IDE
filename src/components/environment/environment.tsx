import { envs } from '@/lib/env-map';
import Link from 'next/link';

export const Environment = () => {
  return (
    <div className="static h-3/6 space-y-2 items-center py-8 px-4">
      {/* h-3/6 w-full mt-0.5 max-sm:rounded-b-lg max-sm:py-2 */}
      <h1 className="text-xl text-start px-2 max-sm:text-sm font-semibold text-white">
        Create your own virtaul environment using
      </h1>
      <div className="flex flex-wrap justify-evenly h-52 overflow-y-auto shadow-xl shadow-[#1d1836] rounded-lg p-4">
        {Object.keys(envs)
          .sort((a, b) => (envs[b].name > envs[a].name ? -1 : 1))
          .map((env, i) => (
            <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <Link href={`/machine/${env}`} key={i}>
                <div className="border bg-[#1d1836] h-24 py-2 px-1 justify-center items-center text-center rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
                  <h2 className="text-lg text-white/80 text-center font-bold mb-2">
                    {envs[env].name}
                  </h2>
                  <p className="hidden sm:block text-white/50 text-sm">
                    {envs[env].desc}
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
