import { langs } from '@/lib/lang-map';
import Link from 'next/link';

export const Language = () => {
  return (
    <div className="flex flex-wrap justify-start mx-1">
      {Object.keys(langs)
        .sort((a, b) => (langs[b].name > langs[a].name ? -1 : 1))
        .map((lang, i) => (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1">
            <div className="border border-green-500  justify-center items-center text-center rounded-lg h-[30px]">
              <Link href={`/${lang}`} key={i}>
                <h2 className="text-sm font-bold my-1 mx-1">
                  {langs[lang].name}
                </h2>
              </Link>
            </div>
          </div>
        ))}
    </div>
    // <div className="bg-blue-400">
    //   {Object.keys(langs)
    //     .sort((a, b) => (langs[b].name > langs[a].name ? -1 : 1))
    //     .map((lang, i) => (
    //       <Link href={`/${lang}`} key={i}>
    //         <Button
    //           type="blue"
    //           isInline={false}
    //           style={{
    //             margin: 4,
    //             padding: 4,
    //           }}
    //         >
    //           {langs[lang].name}
    //         </Button>
    //       </Link>
    //     ))}
    // </div>
  );
};
{
  /*  <Layout>
         {Object.keys(langs)
          .sort((a, b) => (langs[b].name > langs[a].name ? -1 : 1))
          .map((lang, i) => (
            <Link href={`/${lang}`} key={i}>
              <Button
                type="blue"
                isInline={false}
                style={{
                  margin: 4,
                  padding: 4,
                }}
              >
                <div>{langs[lang].name}</div>
              </Button>
            </Link>
          ))} 
      </Layout>*/
}
