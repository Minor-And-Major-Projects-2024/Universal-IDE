import { XTerm } from "xterm-for-react";

export default function XtermEl({ xtermRef }) {
  return <XTerm
    ref={xtermRef}
    options={{
      theme: {
        background: "#020319",
      },
      // cols: width,
      // rows: height,
      fontFamily: "'Roboto Mono', consolas, monospace",
      letterSpacing: 1
    }}
  />;
}