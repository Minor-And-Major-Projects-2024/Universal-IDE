import { langs } from '@/lib/lang-map';
import Link from 'next/link';
import Button from '../elements/button';

export const Language = () => {
  return (
    <div className="border-4 border-solid border-red-500 m-4 bg-green-700">
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
    </div>
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
