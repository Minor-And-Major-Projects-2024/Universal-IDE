import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { langs } from '../../lib/lang-map';
import { execCode } from '../../lib/lang-api';
import Editor from './editor';
import Button from '../elements/button';
import XtermEl from './xterm';
import styles from './editor-ide.module.css';

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
  if (!langs[lang]) return <p>Not found</p>;
  return (
    <div className={styles.editorbody}>
      <div className={styles.editorhead}>
        <h1>
          <span>IDE-</span>
          {langs[lang].name}
        </h1>
        <div>
          <Button
            className={styles.btn}
            onClick={() => runCode()}
            type="green"
            ref={runBtn}
          >
            {running ? '⚙️⚙️' : 'Run'}
          </Button>
          <Button className={styles.btn} type="green" onClick={redirectToHome}>
            Home
          </Button>
        </div>
      </div>
      <div className={styles.editorMain}>
        <div className={styles.editordisplay}>
          <div className={styles.editor}>
            <Editor
              setValue={setValue}
              language={langs[lang].monaco}
              runCode={() => runBtn.current.click()}
            />
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.resultinput}>
          <p className={styles.resultpara}>STDIN</p>
          <Editor setValue={setStdin} runCode={() => runBtn.current.click()} />
        </div>
        <hr className={styles.divider} />
        <div className={styles.editorOutput}>
          <div className={styles.resultoutput}>
            <p className={styles.resultpara}>STDOUT</p>
            <XtermEl xtermRef={xtermRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <Layout title={langs[lang].name}>
        <div>
          <Header size="med" className="text-xl p-2" title={lang}>
            {langs[lang].name}
          </Header>
          <Button
            className={styles.run}
            onClick={() => runCode()}
            type="green"
            ref={runBtn}
          >
            {running ? '......' : 'Run'}
          </Button> 
        </div>
        <div className={styles.editorCont}>
          <ReflexContainer orientation="vertical">
            <ReflexElement className={styles.hiddenFlow}>
              <Editor
                setValue={setValue}
                language={langs[lang].monaco}
                runCode={() => runBtn.current.click()}
              />
            </ReflexElement>
            <ReflexSplitter />
            <ReflexElement className={styles.terminal} onStopResize={resize}>
              <ReflexContainer orientation="horizontal">
                <ReflexElement
                  className={styles.hiddenFlow}
                  onStopResize={resize}
                  style={{
                    background: '#020319',
                  }}
                >
                  <XtermEl xtermRef={xtermRef} />
                </ReflexElement>
                <ReflexSplitter />
                <ReflexElement className={styles.hiddenFlow}>
                  <ReflexHandle
                    className={`${styles.overlay} ${styles.cursortd}`}
                  >
                    <div className="text-3xl text-black items-start justify-start">
                      STDIN
                    </div>
                  </ReflexHandle>
                  <Editor
                    setValue={setStdin}
                    runCode={() => runBtn.current.click()}
                  />
                </ReflexElement>
              </ReflexContainer>
            </ReflexElement>
          </ReflexContainer>
        </div>
      </Layout> */
}
