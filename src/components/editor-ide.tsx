import { useState, useRef } from 'react';

import { langs } from '../lib/lang-map';
import { execCode } from '../lib/lang-api';

import Layout from '../components/layout';
import Editor from '../components/editor';
import Header from '../components/elements/header';
import Button from '../components/elements/button';

import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement,
  ReflexHandle,
} from 'react-reflex';
import XtermEl from './xterm';

import styles from './editor-ide.module.css';
import 'react-reflex/styles.css';

export default function CodeEditor({ query }) {
  const [value, setValue] = useState('');
  const [stdin, setStdin] = useState('');
  const [running, setRunning] = useState(false);
  const runBtn = useRef(null);

  const { lang } = query;

  let xtermRef = useRef(null);

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

  function resize(e) {
    if (xtermRef.current)
      xtermRef.current.terminal.resize(
        Math.floor(e.domElement.clientWidth / 10),
        Math.floor(e.domElement.clientHeight / 20)
      );
  }

  if (!langs[lang]) return <p>Not found</p>;

  return (
    <Layout title={langs[lang].name}>
      <div>
        <Header
          size="med"
          style={{
            display: 'inline',
            fontSize: '2rem',
            padding: '4px 8px 0 2px',
          }}
          title={lang}
        >
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

          <ReflexElement
            className={styles.terminal}
            id="xterm-container"
            onStopResize={resize}
          >
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
                  <Header size="small">STDIN</Header>
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
    </Layout>
  );
}
