import Homepage from '@/components/homepage/homepage';
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <div className="bg-[#050816] lg:h-screen sm:h-full lg:overflow-hidden sm:overflow-visible p-0.5">
      <Homepage />
    </div>
  );
}
