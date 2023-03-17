import { envs } from '@/lib/env-map';
import Link from 'next/link';

export const Environment = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {Object.keys(envs)
        .sort((a, b) => (envs[b].name > envs[a].name ? -1 : 1))
        .map((env, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mx-8 my-2"
          >
            <Link href={`/machine/${env}`} key={i}>
              <div className="border border-green-500 p-2 rounded-lg h-full ">
                <h2 className="text-lg text-center font-bold mb-2">
                  {envs[env].name}
                </h2>
                <p className="hidden sm:block text-red-300 text-sm">
                  {envs[env].desc}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};
