import { Language } from '@/components/language/language';
import { Navbar } from '@/components/navbar/navbar';

export default function Home() {
  return (
    <div className="bg-black h-screen w-full overflow-hidden">
      <Navbar />
      <Language />
    </div>
  );
}
