import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const IDE = dynamic(() => import('../components/editor-ide'), {
  ssr: false,
});

export default function CodeEditor() {
  return <IDE query={useRouter().query} />;
}
