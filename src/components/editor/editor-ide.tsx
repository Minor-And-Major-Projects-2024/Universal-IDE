import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { langs } from '../../lib/lang-map';
import { execCode } from '../../lib/lang-api';
import Editor from './editor';
import XtermEl from './xterm';
import Layout from './layout';
import Link from 'next/link';

export default function CodeEditorDisplay({ query }: any): JSX.Element {
  const [value, setValue] = useState('');
  const [stdin, setStdin] = useState('');
  const [running, setRunning] = useState(false);
  const runBtn: any = useRef(null);
  const router = useRouter();

  const { lang } = query;

  let xtermRef: any = useRef(null);

  function runCode() {
    if (running) return;
    setRunning(true);
    execCode(
      value.replace(/\r\n/g, '\n'),
      lang,
      stdin.replace(/\r\n/g, '\n')
    ).then((v) => {
      xtermRef.current.terminal.clear();
      setRunning(false);
      xtermRef.current.terminal.writeln(v.replace(/\n/g, '\r\n'));
    });
  }
  const redirectToHome = () => {
    router.push('/');
  };
  if (!langs[lang])
    return (
      <p className="h-screen p-8 bg- flex items-center justify-center text-3xl text-white">
        Not found
      </p>
    );
  return (
    <Layout title={langs[lang].name}>
      <div className={`overflow-hidden`}>
        <div className="flex flex-row justify-between lg:px-4 px-2 bg-[#1d1836]">
          <div className="w-full shadow-xl flex justify-start px-2 max-sm:px-0 py-1 items-center">
            <Link
              href={'/'}
              className="text-white font-bold shadow-xl text-3xl max-sm:text-xl"
            >
              {' '}
              IDE
            </Link>
            <span className="text-3xl max-sm:text-xl font-bold text-center px-8 max-sm:px-2 text-white/50 pointer-events-none">
              {langs[lang].name}
            </span>
          </div>
          <div className="flex flex-row w-max p-1">
            <button
              className="bg-[#050816] hover:shadow-xl hover:shadow-[#915EFF] px-4 max-sm:px-2 py-1 rounded m-1 text-white text-xl"
              onClick={() => runCode()}
              type="submit"
              ref={runBtn}
            >
              {running ? '⚙️' : 'Run'}
            </button>
            <button
              className="bg-[#050816] hover:shadow-xl hover:shadow-[#915EFF] px-4 max-sm:px-2 py-1 rounded m-1 text-white text-xl"
              type="submit"
              onClick={redirectToHome}
            >
              Home
            </button>
          </div>
        </div>
        <div className="w-full h-full border-b">
          <div className="h-[450px] flex flex-row">
            <div className="w-screen border-t border-b overflow-hidden py-2 bg-[#201e1e]">
              <Editor
                setValue={setValue}
                language={langs[lang].monaco}
                runCode={() => runBtn.current.click()}
              />
            </div>
          </div>
          <div className="flex flex-row justify-start items-center h-8">
            <div className="text-semibold text-xl pl-2">STDIN</div>
            <Editor
              setValue={setStdin}
              runCode={() => runBtn.current.click()}
            />
          </div>
          <div className="border-t border-b overflow-hidden">
            <div className="text-semibold text-xl text-center p-1">STDOUT</div>
            <div className="border-t p-2 bg-[#201e1e]">
              <XtermEl xtermRef={xtermRef} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
