import Image from 'next/image';

import Layout from '../components/layout';
import Header from '../components/elements/header';
import Button from '../components/elements/button';
import Link from 'next/link';

import { langs } from '../lib/lang-map';

export default function Home() {
  return (
    <Layout title="WhaleBoat">
      <Header size="big" shadow center style={{ fontWeight: 'bolder' }}>
        WhaleBoat
      </Header>
      <div style={{ textAlign: 'center' }}>
        The <em>easiest</em> way to code!
      </div>
      <Header size="med">Start Coding</Header>
      <div>
        With an intuitive user interface, WhaleBoat's IDE will be yours in no
        time!
      </div>
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
              <a title={lang}>{langs[lang].name}</a>
            </Button>
          </Link>
        ))}

      <Header size="med" style={{ textAlign: 'right' }}>
        Editor support
      </Header>
      <div style={{ textAlign: 'right' }}>
        With 19 languages supported, you can code in any language you want! Not
        only is it that easy, there is great editor support for all the
        languages!*
      </div>
      <div style={{ textAlign: 'right' }}>*Except nim, nim baf</div>

      <Header size="med">Beautiful Design</Header>
      <div>
        With draggable handles and a beautiful dark theme, your eyes will love
        the IDE as much as the code! Resize components of the editor you don't
        need to focus on what you do want. A minimalistic design is the secret
        to all of this!
      </div>

      <Image src="/editor.png" width={108 * 5} height={81 * 5} alt="Editor" />

      <Header size="med" style={{ textAlign: 'right' }}>
        About
      </Header>
      <div style={{ textAlign: 'right' }}>
        I wanted to make my OWN repl.it just to see how 'easy' it was. Spoiler
        alert: It is <em>very</em> hard, but many of the libraries really
        simplified development for me. The name is inspired from the Docker
        whale, which replit uses (Docker, not the whale!).
      </div>

      <Header size="med">Tutorial</Header>
      <div>
        The editor should be really simple to use, but you can hit{' '}
        <code>ctrl + enter</code> as a shortuct to running the code. You can use
        the STDIN editor on the bottom right to enter in user input for the
        program to read. Also, you have 15 seconds of execution time to kill
        non-terminating programs.
      </div>
    </Layout>
  );
}

// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export default function Home() {
//   return (
//     <>
//       <h1 className="text-3xl text-red-500 bold text-center">
//         Next App for IDE
//       </h1>
//     </>
//   );
// }
