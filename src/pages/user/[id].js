import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const UserEditScreen = dynamic(() => import('../../components/user/edit'), {
  ssr: false,
});

export default function CodeEditorApi() {
  return <UserEditScreen query={useRouter().query} />;
}
