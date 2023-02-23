import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-red-500 bold text-center">
        Next App for IDE
      </h1>
    </>
  );
}
