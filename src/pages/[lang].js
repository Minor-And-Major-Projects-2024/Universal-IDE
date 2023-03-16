import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const IDE = dynamic(() => import('../components/editor/editor-ide'), {
  ssr: false,
});

export default function CodeEditorApi() {
  return <IDE query={useRouter().query} />;
}
