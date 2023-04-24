import { langs } from '@/lib/lang-map';
import Link from 'next/link';

export const Language = () => {
  return (
    <div className="static h-/6 space-y-2 items-center py-8 px-4">
      <h1 className="text-xl text-start px-2 max-sm:text-sm font-semibold text-white">
        Choose language for IDE to work with
      </h1>
      <div className="flex flex-wrap justify-evenly h-68 overflow-y-auto shadow-xl shadow-[#1d1836] rounded-lg p-4">
        {Object.keys(langs)
          .sort((a, b) => (langs[b].name > langs[a].name ? -1 : 1))
          .map((lang, i) => (
            <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="border bg-[#1d1836] h-12 justify-center items-center text-center rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
                <Link href={`/${lang}`} key={i}>
                  <span className="text-xl font-semibold flex h-full justify-center items-center text-white/80">
                    {langs[lang].name}
                  </span>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
