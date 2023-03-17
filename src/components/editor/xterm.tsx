import { XTerm } from 'xterm-for-react';

export default function XtermEl({ xtermRef }: any): JSX.Element {
  return (
    <XTerm
      ref={xtermRef}
      options={{
        theme: {
          background: '#201e1e',
          foreground: '#f9f7f7',
        },
        fontFamily: "'Roboto Mono', consolas, monospace",
        letterSpacing: 1,
        fontSize: 14,
        cursorBlink: true,
        cursorStyle: 'underline',
        cursorWidth: 4,
      }}
    />
  );
}
