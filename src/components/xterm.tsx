import { XTerm } from 'xterm-for-react';

export default function XtermEl({ xtermRef }: any): JSX.Element {
  return (
    <XTerm
      ref={xtermRef}
      options={{
        theme: {
          background: '#231f1f',
        },
        fontFamily: "'Roboto Mono', consolas, monospace",
        letterSpacing: 1,
      }}
    />
  );
}
