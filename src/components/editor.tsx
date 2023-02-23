import { addLang } from '../lib/cookeylang-support';
import Editor from '@monaco-editor/react';

export default function CodeEditor({ setValue, runCode, ...props }) {
  function handleEditorDidMount(editor, monaco) {
    addLang(monaco);

    if (runCode)
      editor.addAction({
        id: 'run-program',
        label: 'Run Code',
        keybindings: [
          // fn + f5
          monaco.KeyCode.F5,
          // ctrl + fn + f5
          monaco.KeyMod.CtrlCmd | monaco.KeyCode.F5,
          // ctrl + enter
          monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
        ],

        contextMenuGroupId: 'navigation',
        contextMenuOrder: 1.5,

        run: runCode,
      });
  }

  return (
    <Editor
      theme={'vs-dark'}
      loading={'Loading...'}
      options={{
        cursorSmoothCaretAnimation: true,
        tabSize: 2,
      }}
      onMount={handleEditorDidMount}
      onChange={(v) => setValue(v)}
      {...props}
    />
  );
}
