import { langs } from '@/lib/lang-map';
import Link from 'next/link';
import Button from '../elements/button';
import Layout from '../layout';

export const Language = () => {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
};
